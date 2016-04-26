var _ = require('lodash');
var React = require('react');

var Actions = require('beertimer/actions.js');


var MashStep = React.createClass({
	getDefaultProps: function() {
		return {
			step : {
				time : 0,
				malts : [],
				strike_water : {
					unit : null,
					quantity : null,
					temp : 0
				}
			}
		};
	},

	componentDidMount: function() {
		Actions.setBackgroundColor('#D98027');
	},



	renderMalts : function(){
		return _.map(this.props.step.malts, (malt)=>{
			return <div className='malt'>
				Add malts to strike water :  {malt.name} {malt.quantity}{malt.unit}
			</div>
		})
	},
	render : function(){
		var strike_water = this.props.step.strike_water;
		return <div className='step mashStep'>
			<div className='strikeWater'>
				Heat strike water {strike_water.quantity}{strike_water.unit} to {strike_water.temp}
			</div>
			{this.renderMalts()}
		</div>
	},
})

module.exports = MashStep;