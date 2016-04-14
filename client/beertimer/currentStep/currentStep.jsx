var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

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
				isCountDown: false
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

	render : function(){
		return <div className='currentStep'>
			<h1>{this.props.step.name}</h1>
			<Timer time={this.props.timerInfo.time} />
			<div className="pauseResume">
				{this.renderPauseResume()}
			</div>
		</div>
	},
});


module.exports = CurrentStep;
