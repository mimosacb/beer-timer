var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Store = require('beertimer/store.js');

var Instruction = require('../instruction/instruction.jsx');
var Timer = require('beertimer/components/timer/timer.jsx');

var ActiveContainer = React.createClass({
	mixins : [Store.mixin()],

	getInitialState: function() {
		return {
			step: Store.getCurrentStep(),
			index: Store.getState().currentInstruction,
		};
	},

	onStoreChange : function(){
		console.log('updating', Store.getState().currentInstruction);

		var instruction = Store.getCurrentInstruction();

		if(instruction.taytay == true){


		}


		this.setState({
			step: Store.getCurrentStep(),
			index: Store.getState().currentInstruction,
		});
	},




	render : function(){
		return <div className='activeContainer'>
			<h1>{this.state.step.name}</h1>
			<Timer time={Store.getTimer(this.state.step.name)} />
			<Instruction
				index={this.state.index}
				stepName={this.state.step.name}
			/>
		</div>
	}
});

module.exports = ActiveContainer;
