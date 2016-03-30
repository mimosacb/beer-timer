var React = require('react');
var _ = require('lodash');
var cx = require('classnames');


var Timer = React.createClass({
	getDefaultProps: function() {
		return {
			seconds : 0
		};
	},

	render : function(){
		return <div className='timer'>
			{this.props.seconds}
		</div>
	},

});


module.exports = Timer;