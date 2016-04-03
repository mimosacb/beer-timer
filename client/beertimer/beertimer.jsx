var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Store = require('beertimer/store.js');

//Components
var Timer = require('components/timer/timer.jsx');
var TimerControls = require('./timerControls/timerControls.jsx');
var CurrentStep = require('./currentStep/currentStep.jsx');


var BeerTimer = React.createClass({
	//Will make this component listen for updates from this store and call onStoreChange
	//This is called a 'smart' component because it knows about your store
	mixins : [Store.mixin()],
	getInitialState: function() {
		return {
			timerInfo : Store.getTimerInfo(),
			currentStep: Store.getCurrentStep(),
		};
	},

	//This fires whenever the store's state changes for any reason
	onStoreChange : function(){
		this.setState({
			timerInfo : Store.getTimerInfo(),
			currentStep: Store.getCurrentStep(),
		});
	},

	render : function(){
		return <div className='beertimer'>
			Current step:
			<CurrentStep step={this.state.currentStep} />

			<Timer time={this.state.timerInfo.time} />
			<TimerControls info={this.state.timerInfo} />
		</div>
	},

});


module.exports = BeerTimer;