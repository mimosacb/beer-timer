require('app-module-path').addPath('./shared');

var _ = require('lodash');
var vitreumRender = require('vitreum/render');
var express = require("express");
var app = express();
var fs = require('fs');
app.use(express.static(__dirname + '/build'));


var loadRecipes = function(){
	return _.map(fs.readdirSync('./recipes'), (path)=>{
		return require('./recipes/' + path)
	})
}

var recipes = loadRecipes();


console.log(loadRecipes());


// Fall back on index
app.get('*', function (req, res) {

	vitreumRender({
		page: './build/beertimer/bundle.dot',
		globals:{
		},
		prerenderWith : './client/beertimer/beertimer.jsx',
		initialProps: {
			url: req.originalUrl,
			recipes : recipes
		},
		clearRequireCache : !process.env.PRODUCTION,
	}, function (err, page) {
		return res.send(page)
	});
});

var port = process.env.PORT || 8000;
app.listen(port);
console.log('Listening on localhost:' + port);
