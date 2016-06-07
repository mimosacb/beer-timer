var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Step = require('./step/step.jsx');

var StepContainer = React.createClass({
	getDefaultProps: function() {
		return {
			steps : {}
		};
	},

	renderSteps : function(){
		return _.map(this.props.steps, (step, name) =>{
			console.log(step);
			return <Step step={step} key={name}/>
		});
	},


	render : function(){
		return <div className='stepContainer'>
			StepContainer Ready!
			{this.renderSteps()}
		</div>
	}
});

module.exports = StepContainer;
