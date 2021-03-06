var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Actions = require('beertimer/actions.js');


var TimerControls = React.createClass({
	getDefaultProps: function() {
		return {
			info : {
				isRunning : false,
				time : 0
			}
		};
	},
	handleResetClick : function(){
		Actions.pauseTimer();
		Actions.setTimer(0);
	},
	handlePauseClick : function(){
		Actions.pauseTimer();
	},
	handleResumeClick : function(){
		Actions.resumeTimer();
	},
	handleNextStep : function(){
		Actions.nextStep();
	},


	renderPauseResumeButton : function(){
		if(this.props.info.isRunning){
			return <button onClick={this.handlePauseClick}>
				<i className='fa fa-pause' />
			</button>
		}else{
			return <button onClick={this.handleResumeClick}>
				<i className='fa fa-play' />
			</button>
		}
	},

	render : function(){
		return <div className='timerControls'>
			<h2>Timer Controls</h2>
			<button onClick={this.handleResetClick}>Reset</button>
			<button onClick={this.handleNextStep}>Next step</button>
			{this.renderPauseResumeButton()}
		</div>
	}
});

module.exports = TimerControls;
