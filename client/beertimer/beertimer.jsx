var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Store = require('beertimer/store.js');
var Actions = require('beertimer/actions.js');


//Components
var Timer = require('components/timer/timer.jsx');
var TimerControls = require('./timerControls/timerControls.jsx');
var CurrentStep = require('./currentStep/currentStep.jsx');
var StepList = require('./stepList/stepList.jsx');

var BeerTimer = React.createClass({
	mixins : [Store.mixin()],
	getInitialState: function() {
		return {
			timerInfo : Store.getTimerInfo(),
			currentStep: Store.getCurrentStep(),
			steps : Store.getState().steps
		};
	},
	onStoreChange : function(){
		localStorage.setItem('test', JSON.stringify(Store.getState()));
		this.setState({
			timerInfo : Store.getTimerInfo(),
			currentStep: Store.getCurrentStep(),
			steps : Store.getState().steps
		});
	},

	componentDidMount: function() {
		Actions.init();

		document.onkeydown = (evt)=>{
			if(evt.keyCode == 32) this.handleSpacebarPress()
		};
	},

	handleSpacebarPress : function(){
		Actions.nextStep();
	},

	render : function(){

		console.log(this.state.currentStep.bgColor);

		return <div className='beertimer' style={{backgroundColor : this.state.currentStep.bgColor}}>
			Current step:
			<CurrentStep step={this.state.currentStep} />

			<Timer time={this.state.timerInfo.time} />
			<TimerControls info={this.state.timerInfo} />


			<StepList steps={this.state.steps} selectedIndex={Store.getState().currentStepIndex} />
		</div>
	},

});


module.exports = BeerTimer;
