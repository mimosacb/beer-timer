var _ = require('lodash');
var React = require('react');

var SetupStep   = require('./setupStep/setupStep.jsx');
var MashStep    = require('./mashStep/mashStep.jsx');
var SpargeStep  = require('./spargeStep/spargeStep.jsx');
var BoilStep    = require('./boilStep/boilStep.jsx');
var IceBathStep = require('./iceBathStep/iceBathStep.jsx');
var PitchStep   = require('./pitchStep/pitchStep.jsx');


var SpargeStep = function(){
	return <div>Sparge STEP</div>
}


var Instruction = React.createClass({
	getDefaultProps: function() {
		return {
			step : {
				name : "",
				time : 0
			}
		};
	},

	stepMap : {
		setup : SetupStep,
		mash : MashStep,
		sparge : SpargeStep,
		boil : BoilStep,
		"ice bath" : IceBathStep,
		pitch : PitchStep
	},

	render : function(){
		var StepComponent = this.stepMap[this.props.step.name];
		if(!StepComponent) return null;

		return <StepComponent step={this.props.step} />
	},
})

module.exports = Instruction;

