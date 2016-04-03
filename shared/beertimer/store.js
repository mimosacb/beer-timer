var flux = require('pico-flux');
var Actions = require('beertimer/actions.js');

//Put the initial state of your State here
var State = {
	timer : {
		direction : 'up', //'down'
		isRunning : false,
		time : 0
	},
	currentStepIndex : 0,
	steps: [
		{
			name : 'setup',
			time : 0,
			isCountDown : false
		},
		{
			name : 'mash',
			time : 3600,
			isCountDown : true
		},
		{
			name : 'sparge',
			time : 0,
			isCountDown : false
		},
		{
			name : 'boil',
			time : 3600,
			isCountDown : true
		},
		{
			name : 'ice bath',
			time : 0,
			isCountDown : false
		}
	]
};

//Run a little clock here to update your State internally
setInterval(function(){
	if(State.timer.isRunning){
		if(State.timer.direction == 'up'){
			Actions.incTimer();
		}else{
			Actions.decTimer();
		}
	}
},1000);


var Store = flux.createStore({

	//Setup your action listners here, these will trigger when the associated action is called
	SET_TIMER : function(timeValue){
		State.timer.time = timeValue;
	},
	INC_TIMER : function(){
		State.timer.time = State.timer.time + 1;
	},
	DEC_TIMER: function(){
		State.timer.time = State.timer.time - 1;
	},
	PAUSE_TIMER : function(){
		State.timer.isRunning = false;
	},
	RESUME_TIMER : function(){
		State.timer.isRunning = true;
	},


	SET_STEP_INDEX : function(index){
		if(State.currentStepIndex == index) return false;

		State.currentStepIndex = index;
		var currentStep = Store.getCurrentStep();

		State.timer.isRunning = true;
		if(currentStep.isCountDown){
			State.timer.direction = 'up';
		}else{
			State.timer.direction = 'down';
		}

		State.timer.time = currentStep.time;

		//start timer
		//set timer direction to up, if it’s a not count down step
		//update timer time tp steps time

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
		return State.steps[State.currentStepIndex];
	}
});

module.exports = Store;