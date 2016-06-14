var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Store = require('beertimer/store.js');

var Timer = require('beertimer/components/timer/timer.jsx');


var Instruction = React.createClass({
	mixins : [Store.mixin()],
	getDefaultProps: function() {
		return {
			stepName : '',
			index : 0
		};
	},

	getInitialState: function() {
		return {
			instruction : Store.getInstruction(this.props.stepName, this.props.index),
		};
	},

	onStoreChange : function(){
		this.setState({
			instruction : Store.getInstruction(this.props.stepName, this.props.index),
		})
	},

	renderCheck : function(){
		var isComplete = Store.isComplete(this.props.stepName, this.props.index)

		return <i className={cx('fa', {
			'fa-square-o' : !isComplete,
			'fa-check-square-o' : isComplete,
		})} />

	},

	renderTimer : function(){
		var timer = Store.getTimer(this.props.stepName, this.props.index);
		if(_.isUndefined(timer)) return;


		return <Timer time={timer} />

	},

	render : function(){
		return <div className={cx('instruction', {current : Store.isCurrent(this.props.stepName, this.props.index)})}>
			{this.renderCheck()}

			<span>{this.state.instruction.text}</span>

			{this.renderTimer()}

		</div>
	}
});

module.exports = Instruction;
