require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\Scott\\Desktop\\beer-timer\\client\\beertimer\\beertimer.jsx":[function(require,module,exports){
'use strict';

var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Timer = require('./timer/timer.jsx');

var BeerTimer = React.createClass({
	displayName: 'BeerTimer',

	getInitialState: function getInitialState() {
		return {
			time: 0
		};
	},

	beginTimer: function beginTimer() {
		var self = this;
		this.timer = setInterval(function () {
			self.setState({
				time: self.state.time + 1
			});
		}, 1000);
	},

	componentDidMount: function componentDidMount() {
		this.beginTimer();
	},

	componentWillUnmount: function componentWillUnmount() {
		//If this component unloads for any reason, make sure will kill the timer
		clearInterval(this.timer);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'beertimer' },
			'Hello Chris you are cool',
			React.createElement(Timer, { seconds: this.state.time })
		);
	}

});

module.exports = BeerTimer;

},{"./timer/timer.jsx":"C:\\Users\\Scott\\Desktop\\beer-timer\\client\\beertimer\\timer\\timer.jsx","classnames":"classnames","lodash":"lodash","react":"react"}],"C:\\Users\\Scott\\Desktop\\beer-timer\\client\\beertimer\\timer\\timer.jsx":[function(require,module,exports){
'use strict';

var React = require('react');
var _ = require('lodash');
var cx = require('classnames');

var Timer = React.createClass({
	displayName: 'Timer',

	getDefaultProps: function getDefaultProps() {
		return {
			seconds: 0
		};
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'timer' },
			this.props.seconds
		);
	}

});

module.exports = Timer;

},{"classnames":"classnames","lodash":"lodash","react":"react"}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9TY290dC9EZXNrdG9wL2JlZXItdGltZXIvY2xpZW50L2JlZXJ0aW1lci9iZWVydGltZXIuanN4IiwiQzovVXNlcnMvU2NvdHQvRGVza3RvcC9iZWVyLXRpbWVyL2NsaWVudC9iZWVydGltZXIvdGltZXIvdGltZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFHL0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O0FBR3pDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUVqQyxnQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFNBQU87QUFDTixPQUFJLEVBQUcsQ0FBQztHQUNSLENBQUM7RUFDRjs7QUFFRCxXQUFVLEVBQUcsc0JBQVU7QUFDdEIsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLE1BQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFlBQVU7QUFDbEMsT0FBSSxDQUFDLFFBQVEsQ0FBQztBQUNiLFFBQUksRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDO0lBQzFCLENBQUMsQ0FBQTtHQUNGLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDVDs7QUFFRCxrQkFBaUIsRUFBRSw2QkFBVztBQUM3QixNQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7RUFDbEI7O0FBRUQscUJBQW9CLEVBQUUsZ0NBQVc7O0FBRWhDLGVBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDMUI7O0FBRUQsT0FBTSxFQUFHLGtCQUFVO0FBQ2xCLFNBQU87O0tBQUssU0FBUyxFQUFDLFdBQVc7O0dBR2hDLG9CQUFDLEtBQUssSUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEFBQUMsR0FBRztHQUM5QixDQUFBO0VBQ047O0NBRUQsQ0FBQyxDQUFDOztBQUdILE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDOzs7OztBQzdDM0IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRy9CLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUM3QixnQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFNBQU87QUFDTixVQUFPLEVBQUcsQ0FBQztHQUNYLENBQUM7RUFDRjs7QUFFRCxPQUFNLEVBQUcsa0JBQVU7QUFDbEIsU0FBTzs7S0FBSyxTQUFTLEVBQUMsT0FBTztHQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87R0FDZCxDQUFBO0VBQ047O0NBRUQsQ0FBQyxDQUFDOztBQUdILE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcbnZhciBjeCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcclxuXHJcblxyXG52YXIgVGltZXIgPSByZXF1aXJlKCcuL3RpbWVyL3RpbWVyLmpzeCcpO1xyXG5cclxuXHJcbnZhciBCZWVyVGltZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblxyXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0aW1lIDogMFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cclxuXHRiZWdpblRpbWVyIDogZnVuY3Rpb24oKXtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRzZWxmLnNldFN0YXRlKHtcclxuXHRcdFx0XHR0aW1lIDogc2VsZi5zdGF0ZS50aW1lICsgMVxyXG5cdFx0XHR9KVxyXG5cdFx0fSwgMTAwMCk7XHJcblx0fSxcclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5iZWdpblRpbWVyKCk7XHJcblx0fSxcclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly9JZiB0aGlzIGNvbXBvbmVudCB1bmxvYWRzIGZvciBhbnkgcmVhc29uLCBtYWtlIHN1cmUgd2lsbCBraWxsIHRoZSB0aW1lclxyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuXHR9LFxyXG5cclxuXHRyZW5kZXIgOiBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdiZWVydGltZXInPlxyXG5cdFx0XHRIZWxsbyBDaHJpcyB5b3UgYXJlIGNvb2xcclxuXHJcblx0XHRcdDxUaW1lciBzZWNvbmRzPXt0aGlzLnN0YXRlLnRpbWV9IC8+XHJcblx0XHQ8L2Rpdj5cclxuXHR9LFxyXG5cclxufSk7XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCZWVyVGltZXI7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcclxudmFyIGN4ID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xyXG5cclxuXHJcbnZhciBUaW1lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2Vjb25kcyA6IDBcclxuXHRcdH07XHJcblx0fSxcclxuXHJcblx0cmVuZGVyIDogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndGltZXInPlxyXG5cdFx0XHR7dGhpcy5wcm9wcy5zZWNvbmRzfVxyXG5cdFx0PC9kaXY+XHJcblx0fSxcclxuXHJcbn0pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGltZXI7Il19
