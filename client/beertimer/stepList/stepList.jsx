var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Actions = require('beertimer/actions');

var StepList = React.createClass({
	getDefaultProps: function() {
		return {
			steps : [],
			selectedIndex : -1
		};
	},
	handleChangeStep : function(index){
		Actions.setStepIndex(index);
	},

	renderSteps : function(){
		return _.map(this.props.steps, (step, index)=>{
			var isSelected = this.props.selectedIndex == index

			var checkmark;
			if(isSelected) checkmark = <i className='fa fa-beer' />

			return <div key={index}
				className={cx('step', {selected : isSelected})}
				onClick={this.handleChangeStep.bind(this, index)}>
				{checkmark} {step.name}
			</div>
		});
	},

	render : function(){
		return <h2 className='stepList'>
			{this.renderSteps()}
		</h2>
	}
});

module.exports = StepList;
