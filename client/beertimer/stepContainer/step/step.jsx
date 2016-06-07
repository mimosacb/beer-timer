var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Instruction = require('../../instruction/instruction.jsx');

var Step = React.createClass({
	getDefaultProps: function() {
		return {
			step : {
				name : '',
				instructions : []
			}
		};
	},

	renderInstructions : function(){
		return _.map(this.props.step.instructions, (instruction, index) => {
			return <Instruction
				stepName={this.props.step.name}
				index={index}
				key={index}
			/>
		})
	},

	render : function(){
		return <div className='step'>
			<h3>{this.props.step.name}</h3>
			{this.renderInstructions()}
		</div>
	}
});

module.exports = Step;
