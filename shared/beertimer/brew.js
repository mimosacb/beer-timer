var makeDefaultStep = function(name, bgColor) {
	return {
		"name" : name,
		"time" : 0,
		"isCountDown" : false,
		"bgColor" : bgColor
	};
}

var Brew = function(brewJson) {
	this.name = brewJson && brewJson.name || "Default Brew";
	this.steps = [
		makeDefaultStep("setup", "#81A801"),
		makeDefaultStep("mash", "#D98027"),
		makeDefaultStep("sparge", "#B36615"),
		makeDefaultStep("boil", "#B64240"),
		makeDefaultStep("ice bath", "#3EA0B5"),
		makeDefaultStep("pitch", "#000000")
	];

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
