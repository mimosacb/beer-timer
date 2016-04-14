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
	var setupStep = _.findWhere(this.steps, {name: "setup"});

	var makeIngredients = function(label, ingredients) {
		return _.map(ingredients, function(ingr){
			return label + ': ' + ingr.name + ' ' + ingr.quantity + ingr.unit;
		});
	};

	var strikeWater = 'Strike water: ' + recipe.mash.strike_water.quantity + recipe.mash.strike_water.unit;
	var spargeWater = 'Sparge water: ' + recipe.sparge.quantity + recipe.sparge.unit;
	var malts = makeIngredients('Malt', recipe.mash.malts);
	var wet_hops = makeIngredients('Hop', recipe.boil.hops);
	var dry_hops = makeIngredients('Dry Hop', recipe.pitch.hops);

	var ingredients = [strikeWater, spargeWater, malts, wet_hops, dry_hops ];
	ingredients = _.flatten(ingredients);

	setupStep.instructions.push({
		name: "Get ingredients",
		list: ingredients
	});

	setupStep.instructions.push({
		name: "Get equipment",
		list: [
			"2 Gal. Brew Pot (or larger)",
			"2 Gal. Fermenting Bucket",
			"Large Strainer",
			"Pair of Tongs",
			"1 Gal. Jug",
			"Airlock",
			"Long Spoon or Paddle",
			"Hydrometer",
			"Thermometer",
			"No-Rinse Sanitizer",
			"Cleanser",
			"Mini Auto Siphon",
			"Ice"
		]
	});

	// Make Mash Instructions
	// Make Sparge Instructions
	// Make Boil Instructions
	// Make Ice Bath Instructions
	// Make Pitch Instructions

	return this;
};

module.exports = Brew;
