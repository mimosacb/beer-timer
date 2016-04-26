var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

//var InstructionList = require('./instructionList/instructionList.jsx')

var Instruction = require('./instruction/instruction.jsx');


var Timer = require('beertimer/components/timer/timer.jsx');

var CurrentStep = React.createClass({
	getDefaultProps: function() {
		return {
			timerInfo : {
				isRunning: false,
				time: 0, // in seconds
			},
			step: {
				name : "",
				time: 0,
			},

			//Optional
			nextStep : {
				name : "",
				time: 0,
			}
		};
	},

	renderPauseResume : function(){
		if(this.props.timerInfo.isRunning){
			return <i className='fa fa-play' />
		}else{
			return <i className='fa fa-pause' />
		}
	},
	renderCurrentInstruction : function(){
		return <Instruction step={this.props.step} />
	},
	renderNextInstruction : function(){
		if(this.props.nextStep.name == "") return;

		//TODO: Add in a renderer for a timer if the step is a count down

		return <div className='nextStep'>
			{this.props.nextStep.name}
		</div>
	},

	render : function(){
		return <div className='currentStep'>
			<h1>{this.props.step.name}</h1>
			<Timer time={this.props.timerInfo.time} />
			<div className="pauseResume">
				{this.renderPauseResume()}
			</div>

			{this.renderCurrentInstruction()}
			{this.renderNextInstruction()}

		</div>
	},
});


module.exports = CurrentStep;
