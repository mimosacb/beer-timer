var flux = require('pico-flux');
var fetch = require('isomorphic-fetch');
var _ = require('lodash');



var recipe = {
	name : "Shacalacka",
	steps : {
		mash : {
			timer : 6000,
​			instructions : [
				{
					text : "heat 1 gallon of water to 150f",
				},
				{
					text : "whtever",
					sub_timer : 4000,
				},
				{
					text : 'neato'
				}
​
			]
		},
		sparge : {
​			instructions : [
				{
					text : "heat 1 gallon of water to 150f",
				}
			]
		}
	}
};



var State = {
	recipe : recipe,

	currentStep : 'mash',
	currentInstruction : 2,
	​
	activeTimers : {
		mash2 : 4000
	},


	completedInstructions : {
	​	mash : [true, true],
		sparge : []
	}


};








/*


//var Brew = require('beertimer/brew.js');

//var defaultBrew = new Brew();

//Put the initial state of your State here
var State = {
	bgColor : '#444',
	timer : {
		direction : 'up', //'down'
		isRunning : false,
		time : 0
	},
	currentStepIndex : 0,
	brew: {
		steps : []

	},//defaultBrew
};
*/

var Store = flux.createStore({
	INIT : function(defaultBrew){
		State.brew = defaultBrew;
/*
		fetch('/api/brews/awesome_brew')
			.then(response => response.json())
			.then(json => {
				if (json) {
					//var brew = new Brew(json);
					State.brew = json;
					this.emitChange();
				} else {
					console.error('Failed to load brew');
				}
			});
*/
		setInterval(()=>{
			if(State.timer.isRunning){
				if(State.timer.direction == 'up'){
					State.timer.time++;
				}else{
					State.timer.time--;
				}
				this.emitChange();
			}
		}, 1000);
		var tempState = localStorage.getItem('test');
		if(tempState) State = _.extend({}, State, JSON.parse(tempState));
	},


	//Setup your action listners here, these will trigger when the associated action is called
	SET_TIMER : function(timeValue){
		State.timer.time = timeValue;
	},
	/*
	INC_TIMER : function(){
		State.timer.time = State.timer.time + 1;
	},
	DEC_TIMER: function(){
		State.timer.time = State.timer.time - 1;
	},
	*/
	PAUSE_TIMER : function(){
		State.timer.isRunning = false;
	},
	RESUME_TIMER : function(){
		State.timer.isRunning = true;
	},

	SET_STEP_INDEX : function(index){
		//start timer
		//set timer direction to up, if it’s a not count down step
		//update timer time tp steps time

		if(State.currentStepIndex == index) return false;

		State.currentStepIndex = index;
		var currentStep = Store.getCurrentStep();

		State.timer.isRunning = true;
		if(currentStep.time && currentStep.time !== 0){
			State.timer.direction = 'down';
		}else{
			State.timer.direction = 'up';
		}

		State.timer.time = currentStep.time || 0;
	},
	SET_BG_COLOR : function(bgColor){
		State.bgColor = bgColor;
	},
},{
	getState : function(){
		return State;
	},

	//Getters allow your components to easily grab slices of the State's state to process/use
	getTimerInfo : function(){
		return State.timer;
	},
	getCurrentStep: function(){
		return State.brew.steps[State.currentStepIndex];
	},
	getNextStep: function(){
		return State.brew.steps[State.currentStepIndex + 1];
	},
	getBackgroundColor : function(){
		return State.bgColor;
	},
});

module.exports = Store;
