var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Store = require('beertimer/store.js');


var EndStep = React.createClass({

	getInitialState: function() {
		return {
			//isDone : false
		};
	},

	renderEnding : function(){
		var done = Store.getState().isBrewComplete;

		if(done === true){
			return <h1>
				You made beer! You da best!
			</h1>
		}
	},

	render : function(){
		return <div>
		{this.renderEnding()}
		</div>
	}
});

module.exports = EndStep;
