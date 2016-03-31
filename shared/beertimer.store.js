var flux = require('pico-flux');
var Actions = require('beertimer/beertimer.store.js')

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


	}


},1000);




module.exports = flux.createStore({
	//Add your action listeners as the first parameter
	ADD_INC : function(val){
		Store.inc += val;
	},

	//If you don't want your action listeners to emit a change, return false
	SET_INC : function(inc){
		Store.inc = inc;
		return false;
	},

	SET_TIMER : function(){

	},
	INC_TIMER : function(){

	},
	PAUSE_TIMER : function(){

	},
	RESUME_TIMER : function(){

	},



},{
	//And your store getters as the second parameter
	getTimerInfo : function(){
		return Store.inc;
	},
})