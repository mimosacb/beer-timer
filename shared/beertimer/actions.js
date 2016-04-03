var dispatch = require('pico-flux').dispatch;

var Store = require('beertimer/store');


var Actions = {
	setTimer : function(time){
		dispatch('SET_TIMER', time);
	},
	incTimer : function(){
		dispatch('INC_TIMER');
	},
	decTimer: function() {
		dispatch('DEC_TIMER');
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
		Actions.setStepIndex(Store.getState().currentStepIndex + 1)
	},
};

module.exports = Actions;