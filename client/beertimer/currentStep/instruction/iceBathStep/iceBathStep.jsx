var React = require('react');
var _ = require('lodash');
var cx = require('classnames');
var Actions = require('beertimer/actions.js');


var IceBathStep = React.createClass({


	componentDidMount: function() {
		Actions.setBackgroundColor('#3EA0B5');
	},



	render : function(){
		return <div className='iceBathStep'>
			IceBathStep Ready!
		</div>
	}
});

module.exports = IceBathStep;
