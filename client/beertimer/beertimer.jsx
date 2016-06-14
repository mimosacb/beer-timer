var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Store = require('beertimer/store.js');
var Actions = require('beertimer/actions.js');

//Components
//var CurrentStep = require('./currentStep/currentStep.jsx');
//var StepList = require('./stepList/stepList.jsx');
//var InstructionList = require('./instructionList/instructionList.jsx');


var ActiveContainer = require('./activeContainer/activeContainer.jsx');
var StepContainer = require('./stepContainer/stepContainer.jsx');


// TODO
// Make example UI instructions for awesome_brew.json

var BeerTimer = React.createClass({
	mixins : [Store.mixin()],
	getInitialState: function() {
		return {
			recipe : Store.getState().recipe
		};
	},

	onStoreChange : function(){
		this.setState({
			recipe : Store.getState().recipe
		});
	},

	componentDidMount: function() {
		Actions.init();

		document.onkeydown = (evt)=>{
			if(evt.keyCode == 32) this.handleSpacebarPress()
		};
	},

	handleSpacebarPress : function(){
		if(Store.getState().isTimerRunning){
			Actions.pauseTimer();
		}else{
			Actions.resumeTimer();
		}
	},

	render : function(){
		return <div className='beertimer' style={{backgroundColor : Store.getCurrentBackground()}}>
			<ActiveContainer />
			<StepContainer
				steps={this.state.recipe.steps}
			/>
		</div>
	},
});

module.exports = BeerTimer;
