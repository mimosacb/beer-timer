var React = require('react');
var _ = require('lodash');
var cx = require('classnames');


var Actions = require('beertimer/actions.js');


var COM = React.createClass({


	componentDidMount: function() {
		Actions.setBackgroundColor('#B64240');
	},


	render : function(){
		return <div className='COM'>
			COM Ready!
		</div>
	}
});

module.exports = COM;
