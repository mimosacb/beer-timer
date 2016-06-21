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
		console.log('updating', Store.getState().currentInstruction);

		//Add step and index change check
		this.checkTayTay();


		this.setState({
			step: Store.getCurrentStep(),
			index: Store.getState().currentInstruction,
		});
	},


	checkTayTay : function(){
		var instruction = Store.getCurrentInstruction();

		if(!this.state.displayTayTay && instruction.taytay){
			this.setState({
				displayTayTay : true
			});
		}else{
			this.setState({
				displayTayTay : false
			});
		}
	},

	renderTayTay : function(){
		if(!this.state.displayTayTay) return;
		return <video ref="taytaySwift" controls={false}>
			<source src="/assets/beertimer/currentStep/instruction/pitchStep/shake_it_off.mp4" type="video/mp4" />
		</video>
	},

	render : function(){
		return <div className='activeContainer'>
			{this.renderTayTay()}
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
