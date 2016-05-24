var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Actions = require('beertimer/actions.js');
var Store = require('beertimer/store.js');

var PitchStep = React.createClass({

	//TODO: Timer state (aka spacebar) should also pause/play the video
	mixins : [Store.mixin()],
	getInitialState: function() {
		return {
			timer : Store.getTimerInfo()
		};
	},
	onStoreChange: function() {
		return {
			timer : Store.getTimerInfo()
		};
	},

	componentDidMount: function() {
		Actions.setBackgroundColor('transparent');
		this.refs.taytaySwift.play();
	},

	componentDidUpdate: function(){
		// Pause or play video based on timer
		if(this.state.timer.isRunning){
			console.log("play that sucker")
			this.refs.taytaySwift.play()
		}else{
			this.refs.taytaySwift.pause()
		}
	},

	renderVideo : function(){
		return <video ref="taytaySwift" controls={false}>
			<source src="/assets/beertimer/currentStep/instruction/pitchStep/shake_it_off.mp4" type="video/mp4" />
		</video>
	},


	render : function(){
		return <div className='step pitchStep'>
			{this.renderVideo()}
			PitchStep Ready!
		</div>
	}
});

module.exports = PitchStep;
