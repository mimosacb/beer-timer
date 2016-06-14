var flux = require('pico-flux');
var _ = require('lodash');

var recipe = {
	name : 'Cool brew',
	steps : {
		mash : {
			name : 'mash',
			timer : 6000,
			bgColor : '#F45E4B',
			instructions : [
				{
					text : 'heat 1 gallon of water'
				},
				{
					text : 'whatever',
					timer : 5000
				},
				{
					text : 'dsfgsdf',
					timer : 0
				}
			]
		},
		sparge : {
			name : 'sparge',
			bgColor : '#4AC287',
			instructions : [
				{
					text : 'heat 1 gallon of water'
				}
			]
		},
	}
}




var State = {
	recipe : recipe,
	currentStep : 'mash',
	currentInstruction : 0,
	timerRunning : false,
	timers : {
		up: {
			mash0 : 4000
		},
		down : {}
	},
	completed : {
		mash : [true, false, true],
		sparge : [true]
	},
};


var activateStep = function(stepName){
	State.currentStep = stepName;
	State.currentInstruction = 0;

	_.each(State.recipe.steps[stepName].instructions, (instruction, index)=>{
		var id = `${stepName}${index}`;
		if(_.isUndefined(instruction.timer)) return;
		if(!_.isUndefined(Store.getTimer(stepName, index))) return;

		if(instruction.timer === 0){
			State.timers.up[id] = 0;
		}else{
			State.timers.down[id] = instruction.timer;
		}
	});
};

var activeInstruction = function(stepName, instructionIndex){
	if(State.currentStep !== stepName){
		activateStep(stepName);
	}
	State.currentInstruction = instructionIndex;
}

var updateTimers = function(){
	_.each(State.timers.up, (time, id)=>{
		State.timers.up[id] += 1;
	});

	_.each(State.timers.down, (time, id)=>{
		if(State.timers.down[id] !== false){
			State.timers.down[id] -= 1;
		}
		if(State.timers.down[id] === 0){
			State.timers.down[id] = false;
		}
	});
};

var Store = flux.createStore({
	INIT : function(brewRecipe){
		State.recipe = recipe;

		//build the completed object
		State.completed = _.reduce(State.recipe.steps, (r, step)=>{
			r[step.name] = _.times(step.instructions.length, ()=>{return false});
			return r
		}, {});

		//clear the timers
		State.timers.up = {};
		State.timers.down = {};

		//set the current step and instruction to basic
		State.currentStep = _.keys(State.recipe.steps)[0];
		State.currentInstruction = 0;

		//make timerRunning false
		State.timerRunning = false;

		//kick off the timer loop
		setInterval(()=>{
			if(State.timerRunning){
				updateTimers();
				this.emitChange();
			}
		}, 1000);
	},

	ACTIVATE_STEP : function(stepName){
		activateStep(stepName);
	},
	ACTIVATE_INSTRUCTION : function(stepName, instructionIndex){
		activeInstruction(stepName, instructionIndex);
	},

	COMPLETE_INSTRUCTION : function(stepName, instructionIndex){
		State.completed[stepName][instructionIndex] = true;

		var nextStep = _.reduce(State.completed, (r, completedArray, stepName) => {
			var hasUncompletedSteps = !_.every(completedArray);
			if(!r && hasUncompletedSteps) r = stepName;
			return r;
		}, null);

		var nextInstruction = _.find(State.completed[nextStep]);

		activeInstruction(nextStep, nextInstruction);
	},
	UNCOMPLETE_INSTRUCTION : function(stepName, instructionIndex){
		State.completed[stepName][instructionIndex] = false;
		activeInstruction(stepName, instructionIndex);
	},

	PAUSE_TIMER : function(){
		State.timerRunning = false;
	},
	RESUME_TIMER : function(){
		State.timerRunning = true;
	},


},{
	getState : function(){
		return State;
	},

	getCurrentStep : function(){
		return State.recipe.steps[State.currentStep];
	},

	getCurrentInstruction : function(){
		return State.recipe.steps[State.currentStep].instructions[State.currentInstruction];
	},

	getInstruction : function(step, index){
		if(State.recipe.steps[step]) return State.recipe.steps[step].instructions[index] || {};
		return {};
	},

	isComplete : function(step, index){
		return !!State.completed[step][index];
	},

	isCurrent : function(step, index){
		return State.currentStep == step && State.currentInstruction == index;
	},

	getTimer : function(step, index){
		var id = `${stepName}${index}`;
		if(!_.isUndefined(State.timers.up[id])) return State.timers.up[id];
		if(!_.isUndefined(State.timers.down[id])) return State.timers.down[id];
	},

	getCurrentBackground  : function(){

	},


});

module.exports = Store;
