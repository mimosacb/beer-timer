var dispatch = require('pico-flux').dispatch;
var Store = require('beertimer/store.js');


var Actions = {
	init : function(){
		dispatch('INIT');
	},

	setTimer : function(time){
		dispatch('SET_TIMER', time);
	},
	pauseTimer : function(){
		dispatch('PAUSE_TIMER');
	},
	resumeTimer : function(){
		dispatch('RESUME_TIMER');
	},

	//Step Action
	setStepIndex : function(index){
		dispatch('SET_STEP_INDEX', index);
	},
	nextStep : function(){
		console.log(Store);

		Actions.setStepIndex(Store.getState().currentStepIndex + 1)
	},
};

module.exports = Actions;