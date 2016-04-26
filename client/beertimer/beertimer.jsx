var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Store = require('beertimer/store.js');
var Actions = require('beertimer/actions.js');

//Components
var CurrentStep = require('./currentStep/currentStep.jsx');
var StepList = require('./stepList/stepList.jsx');
//var InstructionList = require('./instructionList/instructionList.jsx');


// TODO
// Make example UI instructions for awesome_brew.json

var BeerTimer = React.createClass({
	mixins : [Store.mixin()],
	getInitialState: function() {
		return {
			timerInfo : Store.getTimerInfo(),
			currentStep: Store.getCurrentStep(),
			brew : Store.getState().brew
		};
	},

	onStoreChange : function(){
		localStorage.setItem('test', JSON.stringify(Store.getState()));
		this.setState({
			timerInfo : Store.getTimerInfo(),
			currentStep: Store.getCurrentStep(),
			brew : Store.getState().brew
		});
	},

	componentDidMount: function() {
		Actions.init(window.defaultBrew);

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
		//TODO: Should move this somehow to step renderer
		var bgColor = "#eee";
		if(this.props.currentStep){
			bgColor = this.props.currentStep.bgColor;
		}

		return <div className='beertimer' style={{backgroundColor : bgColor}}>
			<div className='left-sidebar'>
				<StepList steps={this.state.brew.steps} selectedIndex={Store.getState().currentStepIndex} />
			</div>
			<div className='center-content'>
				<CurrentStep step={this.state.currentStep} timerInfo={this.state.timerInfo}/>
			</div>
			<div className="right-sidebar"></div>
		</div>
	},
});

module.exports = BeerTimer;
