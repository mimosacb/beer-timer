var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Timer = React.createClass({
	getDefaultProps: function() {
		return {
			time : 0 //in seconds
		};
	},
	getMinutes : function(){
		return Math.floor(this.props.time/60);
	},
	getSeconds : function(){
		return _.padStart(this.props.time % 60, 2, '0');
	},

	render : function(){
		return <div className='timer'>
			{this.getMinutes()}:{this.getSeconds()}
		</div>
	}
});

module.exports = Timer;
