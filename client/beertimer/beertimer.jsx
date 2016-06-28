var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Store = require('beertimer/store.js');
var Actions = require('beertimer/actions.js');

const BREW_KEY = 'beertimer-recipe'

//Components
//var CurrentStep = require('./currentStep/currentStep.jsx');
//var StepList = require('./stepList/stepList.jsx');
//var InstructionList = require('./instructionList/instructionList.jsx');


var ActiveContainer = require('./activeContainer/activeContainer.jsx');
var StepContainer = require('./stepContainer/stepContainer.jsx');
var TayTay = require('./taytay/taytay.jsx');
var EndStep = require('./endStep/endStep.jsx');


var CodeEditor = require('beertimer/components/codeEditor/codeEditor.jsx');
var BrewEditor = require('./brewEditor/brewEditor.jsx');


// TODO
// Make example UI instructions for awesome_brew.json

var BeerTimer = React.createClass({
	mixins : [Store.mixin()],
	getDefaultProps: function() {
		return {
			recipes : []
		};
	},
	getInitialState: function() {
		return {
			recipe : Store.getState().recipe,

			showEditor : true
		};
	},

	onStoreChange : function(){
		this.setState({
			recipe : Store.getState().recipe
		});
	},

	componentDidMount: function() {
		console.log(this.props);


		var storedRecipe = localStorage.getItem(BREW_KEY);
		try{
			storedRecipe = JSON.parse(storedRecipe);
		}catch(e){
			//todo: load default
			storedRecipe = {};
		}


		Actions.init(storedRecipe);

		document.onkeydown = (evt)=>{
			if(evt.keyCode == 32) this.handleSpacebarPress()
		};
	},

	handleSpacebarPress : function(){
		//If the editor is open, don't react to space bar
		if(this.state.showEditor) return;
		if(Store.getTimerRunning()){
			Actions.pauseTimer();
		}else{
			Actions.resumeTimer();
		}
	},

	showEditor : function(){
		this.setState({
			showEditor : true
		})
	},
	hideEditor : function(){
		this.setState({
			showEditor : false
		})
	},


	refreshState : function(){

	},


	renderEditor : function(){
		if(!this.state.showEditor) return;

		return <BrewEditor recipe={this.state.recipe} handleClose={this.hideEditor} />
	},

	renderEditorButton : function(){
		return <button className='showEditor' onClick={this.showEditor}>
			<i className='fa fa-pencil fa-fw' />
		</button>
	},


	renderStateRefreshButton : function(){
		return <button className='refreshState' onClick={this.refreshState}>
			<i className='fa fa-refresh fa-fw' />
		</button>
	},

	render : function(){
		return <div className='beertimer' style={{backgroundColor : Store.getCurrentBackground()}}>
			<TayTay />

			{this.renderEditorButton()}
			{this.renderStateRefreshButton()}
			<ActiveContainer />
			<StepContainer
				steps={this.state.recipe.steps}
			/>
			<EndStep />

			{this.renderEditor()}


		</div>
	},
});

module.exports = BeerTimer;
