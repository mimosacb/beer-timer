var React = require('react');
var _ = require('lodash');
var cx = require('classnames');


var CurrentStep = React.createClass({
	getDefaultProps: function() {
		return {
			step: {
				name : "",
				time: 0,
				isCountDown: false
			}
		};
	},

	render : function(){
		return <div className='currentStep'>
			{this.props.step.name}
		</div>
	},

});


module.exports = CurrentStep;