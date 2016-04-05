var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Timer = require('beertimer/components/timer/timer.jsx');

var CurrentStep = React.createClass({
	getDefaultProps: function() {
		return {
			timerInfo : null,
			step: {
				name : "",
				time: 0,
				isCountDown: false
			}
		};
	},

	renderPauseResume : function(){
		var isRunning = this.props.timerInfo && this.props.timerInfo.isRunning;
		if(isRunning){
			return <i className='fa fa-pause' />
		}else{
			return <i className='fa fa-play' />
		}
	},

	render : function(){
		var time = this.props.timerInfo ? this.props.timerInfo.time : 0;
		return <div className='currentStep'>
			<h1>{this.props.step.name}</h1>
			<Timer time={time} />
			<div className="pauseResume">
				{this.renderPauseResume()}
			</div>
		</div>
	},
});


module.exports = CurrentStep;