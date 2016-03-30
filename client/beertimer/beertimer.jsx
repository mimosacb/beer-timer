var React = require('react');
var _ = require('lodash');
var cx = require('classnames');


var Timer = require('./timer/timer.jsx');


var BeerTimer = React.createClass({

	getInitialState: function() {
		return {
			time : 0
		};
	},

	beginTimer : function(){
		var self = this;
		this.timer = setInterval(function(){
			self.setState({
				time : self.state.time + 1
			})
		}, 1000);
	},

	componentDidMount: function() {
		this.beginTimer();
	},

	componentWillUnmount: function() {
		//If this component unloads for any reason, make sure will kill the timer
		clearInterval(this.timer);
	},

	render : function(){
		return <div className='beertimer'>
			Hello Chris you are cool

			<Timer seconds={this.state.time} />
		</div>
	},

});


module.exports = BeerTimer;