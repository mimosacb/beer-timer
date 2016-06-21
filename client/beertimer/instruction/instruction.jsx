var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Store = require('beertimer/store.js');
var Actions = require('beertimer/actions.js');

var Timer = require('beertimer/components/timer/timer.jsx');


var Instruction = React.createClass({
	mixins : [Store.mixin()],
	getDefaultProps: function() {
		return {
			stepName : '',
			index : 0
		};
	},

	onStoreChange : function(){
		this.forceUpdate();
	},

	handleClick : function(){
		var isComplete = Store.isComplete(this.props.stepName, this.props.index);
		if(!isComplete){
			Actions.completeInstruction(this.props.stepName, this.props.index);
		}else{
			Actions.uncompleteInstruction(this.props.stepName, this.props.index);
		}
	},

	renderCheck : function(){
		var isComplete = Store.isComplete(this.props.stepName, this.props.index)

		return <i className={cx('fa', {
			'fa-square-o' : !isComplete,
			'fa-check-square-o' : isComplete,
		})} onClick={this.handleComplete}/>

	},

	renderTimer : function(){
		var timer = Store.getTimer(this.props.stepName, this.props.index);
		if(_.isUndefined(timer)) return;
		return <Timer time={timer} />
	},

	render : function(){
		var instruction = Store.getInstruction(this.props.stepName, this.props.index);

		return <div className={cx('instruction', {current : Store.isCurrent(this.props.stepName, this.props.index)})} onClick={this.handleClick}>
			{this.renderCheck()}

			<span>{instruction.text}</span>

			{this.renderTimer()}

		</div>
	}
});

module.exports = Instruction;
