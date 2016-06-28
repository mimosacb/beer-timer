var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Store = require('beertimer/store.js');

var TayTay = React.createClass({
	mixins : [Store.mixin()],

	getInitialState: function() {
		return {
			isPlaying : false,
			isVisible : false
		};
	},

	onStoreChange : function(){
		var instruction = Store.getCurrentInstruction();

		if(instruction.play_taytay && !this.state.isVisible){
			this.restart();
			this.setState({
				isVisible : true
			});
		}

		if(!instruction.play_taytay && this.state.isVisible){
			this.pause();
			this.setState({
				isVisible : false
			});
		}

		if(this.state.isVisible){
			if(this.state.isPlaying && !Store.getTimerRunning()){
				this.pause();
			}
			if(!this.state.isPlaying && Store.getTimerRunning()){
				this.play();
			}
		}

	},

	restart : function(){
		this.refs.taytaySwift.load();
	},

	play : function(){
		this.refs.taytaySwift.play();
		this.setState({
			isPlaying : true
		});
	},

	pause : function(){
		this.refs.taytaySwift.pause();
		this.setState({
			isPlaying : false
		});
	},

	render : function(){
		return <video className={cx('taytay', {show: this.state.isVisible})}  ref="taytaySwift" controls={false}>
				<source src="/assets//beertimer/taytay/shake_it_off.mp4" type="video/mp4"  />
			</video>
	}
});

module.exports = TayTay;
