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

			loadedTayTay : false,

			displayTayTay : false
		};
	},

	onStoreChange : function(){
		this.setState({
			step: Store.getCurrentStep(),
			index: Store.getState().currentInstruction,
		});

		if(Store.getTimer(this.state.step.name) === false){
			this.playBeepBeep();
		}
	},

	componentDidMount: function() {
		this.beepbeep = new Audio('/assets/beertimer/activeContainer/beepbeep.mp3');
	},

	playBeepBeep : function(){
		this.beepbeep.play();
	},

	renderStepTimer : function(){
		var timer = Store.getTimer(this.state.step.name);

		if(timer === false){
			return <div>
				<i className='fa fa-exclamation-triangle' />
				<Timer time={timer} />
			</div>

		}

		if(timer){
			return <Timer time={timer} />
		}
	},

	render : function(){
		return <div className='activeContainer'>
			<h1>{this.state.step.name}</h1>
			{this.renderStepTimer()}
			<Instruction
				index={this.state.index}
				stepName={this.state.step.name}
			/>
		</div>
	}
});

module.exports = ActiveContainer;
