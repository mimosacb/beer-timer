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
			index: Store.getState().currentIndex,
		};
	},

	onStoreChange : function(){
		this.setState({
			step: Store.getCurrentStep(),
			index: Store.getState().currentIndex,
		});
	},


	render : function(){
		console.log(this.state.step)
		console.log(Store.getTimer(this.state.step.name))


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
