var dispatch = require('pico-flux').dispatch;


var Actions = {
	setTimer : function(time){
		dispatch('SET_TIMER', time);
	},
	incTimer : function(){
		dispatch('INC_TIMER');
	},
	pauseTimer : function(){
		dispatch('PAUSE_TIMER');
	},
	resumeTimer : function(){
		dispatch('RESUME_TIMER');
	},
};

module.exports = Actions;