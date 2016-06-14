var dispatch = require('pico-flux').dispatch;
var Store = require('beertimer/store.js');


var Actions = {
	init : function(brewRecipe){
		dispatch('INIT', brewRecipe);
	},
	activateStep : function(stepName){
		dispatch('ACTIVATE_STEP', stepName);
	},
	activateInstruction : function(stepName, instructionIndex){
		dispatch('ACTIVATE_INSTRUCTION', stepName, instructionIndex);
	},

	completeInstruction : function(stepName, instructionIndex){
		dispatch('COMPLETE_INSTRUCTION', stepName, instructionIndex);
	},

	uncompleteInstruction : function(stepName, instructionIndex){
		dispatch('UNCOMPLETE_INSTRUCTION', stepName, instructionIndex);
	},


/*


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
		Actions.setStepIndex(Store.getState().currentStepIndex + 1)
	},

	setBackgroundColor : function(bgColor){
		dispatch('SET_BG_COLOR', bgColor);
	},
*/
};

module.exports = Actions;
