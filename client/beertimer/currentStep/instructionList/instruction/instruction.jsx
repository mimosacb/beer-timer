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
			var items = _.map(this.props.instruction.list, (item)=>{
				return <li className="instruction-item">{item}</li>
			});

			var itemList = null;
			if (items.length > 0) {
				itemList = <ul className="instruction-item-list">{items}</ul>
			}

			return <div>
				{itemList}
				<p className="instruction-description">{this.props.instruction.description}</p>
			</div>
		}
		return;
	},

	render : function(){
		return <div className='instruction'>
			<h2 className="instruction-name">{this.props.instruction.name}</h2>
			{this.renderContent()}
		</div>
	},
});


module.exports = Instruction;
