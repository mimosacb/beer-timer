var flux = require('pico-flux');
var Actions = require('beertimer/actions.js');

//Put the initial state of your store here
var Store = {
	timer : {
		isRunning : false,
		time : 0
	}

};


//Run a little clock here to update your store internally
setInterval(function(){
	if(Store.timer.isRunning){
		Actions.incTimer();
	}
},1000);


module.exports = flux.createStore({

	//Setup your action listners here, these will trigger when the associated action is called
	SET_TIMER : function(timeValue){
		Store.timer.time = timeValue;
	},
	INC_TIMER : function(){
		Store.timer.time = Store.timer.time + 1;
	},
	PAUSE_TIMER : function(){
		Store.timer.isRunning = false;
	},
	RESUME_TIMER : function(){
		Store.timer.isRunning = true;
	},


},{

	//Getters allow your components to easily grab slices of the Store's state to process/use
	getTimerInfo : function(){
		return Store.timer;
	},
})