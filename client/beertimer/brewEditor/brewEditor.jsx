var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

const BREW_KEY = 'beertimer-recipe'

var CodeEditor = require('beertimer/components/codeEditor/codeEditor.jsx');

var Actions = require('beertimer/actions.js');


var BrewEditor = React.createClass({
	getDefaultProps: function() {
		return {
			recipe : {},
			handleClose : function(){}
		};
	},

	getInitialState: function() {
		return {
			recipeText: JSON.stringify(this.props.recipe, null, '  '),
			invalidJSON : false
		};
	},

	componentDidMount: function() {
		this.refs.codeEditor.codeMirror.setSize(null, 700);
	},

	componentWillReceiveProps: function(nextProps) {
		this.setState({
			recipeText : JSON.stringify(nextProps.recipe, null, '  ')
		});
	},

	handleRecipeChange : function(recipe){
		this.setState({
			recipeText : recipe
		});
		try{
			//set to localstorage
			localStorage.setItem(BREW_KEY, recipe);
			Actions.changeRecipe(JSON.parse(recipe));
			this.setState({
				invalidJSON : false
			})
		}catch(e){
			console.log(e.toString());
			this.setState({
				invalidJSON : true
			})
		}
	},

	render : function(){
		return <div className='brewEditor'>
			<div className={cx('menubar', {invalid : this.state.invalidJSON})}>
				<button className='fa fa-times' onClick={this.props.handleClose} />
			</div>
			<CodeEditor
				ref='codeEditor'
				language='javascript'
				value={this.state.recipeText}
				onChange={this.handleRecipeChange}
			/>
		</div>
	}
});

module.exports = BrewEditor;
