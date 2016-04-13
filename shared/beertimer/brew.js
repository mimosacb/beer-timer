var defaultSteps = [
	{
		"name" : "setup",
		"time" : 0,
		"isCountDown" : false,
		"bgColor" : "#81A801",
	},
	{
		"name" : "mash",
		"time" : 0,
		"isCountDown" : false,
		"bgColor" : "#D98027"
	},
	{
		"name" : "sparge",
		"time" : 0,
		"isCountDown" : false,
		"bgColor" : "#B36615"
	},
	{
		"name" : "boil",
		"time" : 0,
		"isCountDown" : false,
		"bgColor" : "#B64240"
	},
	{
		"name" : "ice bath",
		"time" : 0,
		"isCountDown" : false,
		"bgColor" : "#3EA0B5"
	},
	{
		"name": "pitch",
		"time": 0,
		"isCountDown": false,
		"bgColor": "#000000"
	}
];

var Brew = function(brewJson) {
	this.name = brewJson && brewJson.name || "Default Brew";
	this.steps = defaultSteps;

	var recipe = brewJson && brewJson.recipe;
	if (recipe) {
		_.each(this.steps, function(step){
			var matchingStep = recipe[step.name];
			if (matchingStep && matchingStep.time) {
				step.time = matchingStep.time;
				step.isCountDown = true;
			} else {
				step.time = 0;
				step.isCountDown = false;
			}
		});
	}

	return this;
};

module.exports = Brew;
