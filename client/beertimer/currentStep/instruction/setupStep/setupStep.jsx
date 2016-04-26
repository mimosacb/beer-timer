var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Actions = require('beertimer/actions.js');

var SetupStep = React.createClass({

	componentDidMount: function() {
		Actions.setBackgroundColor('#81A801');
	},

	render : function(){
		return <div className='step setupStep'>
			SetupStep Ready!
		</div>
	}
});

module.exports = SetupStep;
