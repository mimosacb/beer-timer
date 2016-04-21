var React = require('react');

var Instruction = React.createClass({
	getDefaultProps: function() {
		return {
			instruction: {
				name: "",
				list: [],
				description:""
			},
			isActive: false
		};
	},

	renderContent: function() {
		if (this.props.isActive) {
			return <div>
				<div>{this.props.instruction.list}</div>
				<div>{this.props.instruction.description}</div>
			</div>
		}
		return;
	},

	render : function(){
		return <div className='instruction'>
			<div>{this.props.instruction.name}</div>
			{this.renderContent()}
		</div>
	},
});


module.exports = Instruction;
