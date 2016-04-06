var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Store = require('beertimer/store.js');
var Actions = require('beertimer/actions.js');

//Components
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
		if(Store.getTimerInfo().isRunning){
			Actions.pauseTimer();
		}else{
			Actions.resumeTimer();
		}
	},

	render : function(){
		return <div className='beertimer' style={{backgroundColor : this.state.currentStep.bgColor}}>
			<CurrentStep step={this.state.currentStep} timerInfo={this.state.timerInfo}/>
			<StepList steps={this.state.steps} selectedIndex={Store.getState().currentStepIndex} />
		</div>
	},
});

module.exports = BeerTimer;
