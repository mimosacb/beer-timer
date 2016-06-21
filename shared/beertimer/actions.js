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
		console.log('test');
		dispatch('COMPLETE_INSTRUCTION', stepName, instructionIndex);
	},

	uncompleteInstruction : function(stepName, instructionIndex){
		dispatch('UNCOMPLETE_INSTRUCTION', stepName, instructionIndex);
	},

	pauseTimer : function(){
		dispatch('PAUSE_TIMER');
	},
	resumeTimer : function(){
		dispatch('RESUME_TIMER');
	},

};

module.exports = Actions;
