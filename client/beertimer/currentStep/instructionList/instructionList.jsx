var React = require('react');

var Instruction = require('./instruction/instruction.jsx');

var InstructionList = React.createClass({
	getDefaultProps: function() {
		return {
			instructions: [
				{
					name: "",
					list: [],
					description:""
				}
			],
			currentInstructionIdx: 0
		};
	},

	renderInstruction: function(idx, isActive) {
		if (idx >= 0 && idx < this.props.instructions.length ) {
			var instruction = this.props.instructions[idx];
			return <Instruction instruction={instruction} isActive={isActive} />
		}
		return;
	},

	render : function(){
		return <div className='instructionList'>
			<div className="flex-left"></div>
			<div className="flex-center">
				{this.renderInstruction(this.props.currentInstructionIdx, true)}
			</div>
			<div className="flex-right">
				{this.renderInstruction(this.props.currentInstructionIdx + 1, false)}
			</div>
		</div>
	},
});


module.exports = InstructionList;
