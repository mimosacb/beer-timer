var flux = require('pico-flux');
var Actions = require('beertimer/actions.js');

//Put the initial state of your State here
var State = {
	timer : {
		isRunning : false,
		time : 0
	},
	currentStep : 0,
	steps: [
		{
			name : 'setup',
			time : 0,
			isCountDown : false
		},
		{
			name : 'sparge',
			time : 350,
			isCountDown : true
		},
		{
			name : 'boil',
			time : 350,
			isCountDown : true
		},
		{
			name : 'ice bath',
			time : 350,
			isCountDown : true
		}
	]
};


//Run a little clock here to update your State internally
setInterval(function(){
	if(State.timer.isRunning && Store.getCurrentStep().isCountDown){
		Actions.incTimer();
	}
},1000);


var Store = flux.createState({

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
	INC_STEP : function(){
		State.currentStep = State.currentStep + 1;
	},
},{

	//Getters allow your components to easily grab slices of the State's state to process/use
	getTimerInfo : function(){
		return State.timer;
	},

	getCurrentStep: function(){
		return State.steps[State.currentStep];
	}
});

module.exports = Store;