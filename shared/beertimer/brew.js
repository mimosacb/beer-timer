var _ = require('lodash');

var makeDefaultStep = function(name, bgColor) {
	return {
		"name" : name,
		"time" : 0,
		"isCountDown" : false,
		"bgColor" : bgColor,
		"instructions" : []
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
	if (!recipe)
		return this;

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

	// Make Setup Instructions
	var setupStep = _.find(this.steps, {name: "setup"});

	var makeIngredients = function(label, ingredients) {
		return _.map(ingredients, function(ingr){
			return label + ': ' + ingr.name + ' ' + ingr.quantity + ingr.unit;
		});
	};

	var strikeWaterIngr = 'Strike water: ' + recipe.mash.strike_water.quantity + recipe.mash.strike_water.unit;
	var spargeWaterIngr = 'Sparge water: ' + recipe.sparge.quantity + recipe.sparge.unit;
	var maltIngrs = makeIngredients('Malt', recipe.mash.malts);
	var wetHopIngrs = makeIngredients('Hop', recipe.boil.hops);
	var dryHopIngrs = makeIngredients('Dry Hop', recipe.pitch.hops);

	var ingredients = [strikeWaterIngr, spargeWaterIngr, maltIngrs, wetHopIngrs, dryHopIngrs ];
	ingredients = _.flatten(ingredients);

	setupStep.instructions = [
		{
			name: "Get ingredients",
			list: ingredients
		},
		{
			name: "Get equipment",
			list: recipe.setup.equipment
		}
	];

	// Make Mash Instructions
	var mashStep = _.find(this.steps, {name: "mash"});
	var strike_water = recipe.mash.strike_water;
	mashStep.instructions = [
		{
			name: "Heat strike water",
			description: `${strike_water.quantity}${strike_water.unit} to ${strike_water.temp}`
		},
		{
			name: "Add malts to strike water",
			list: maltIngrs
		}
	];

	// Make Sparge Instructions
	// Make Boil Instructions
	// Make Ice Bath Instructions
	// Make Pitch Instructions

	return this;
};

module.exports = Brew;
