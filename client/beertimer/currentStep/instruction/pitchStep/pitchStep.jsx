var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Actions = require('beertimer/actions.js');

var PitchStep = React.createClass({

	//TODO: Spacebar should also pause the video

	componentDidMount: function() {
		Actions.setBackgroundColor('transparent');
		this.refs.taytaySwift.play()
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
