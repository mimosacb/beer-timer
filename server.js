require('app-module-path').addPath('./shared');

var _ = require('lodash');
var vitreumRender = require('vitreum/render');
var express = require("express");
var app = express();
var fs = require('fs');
app.use(express.static(__dirname + '/build'));

// API
app.get('/api/brews/:brewid', function(req, res){
	var brewid = req.params.brewid || 'awesome_brew';
	var rootFolder = 'shared';
	var path = '/brews/' + brewid + '.json';
	fs.stat(rootFolder + path, function (err, stats) {
		if (!err && stats.isFile()) {
			res.sendFile(path, {root: rootFolder});
		} else {
			res.sendStatus(404);
		}
	});
});


var defaultBrew = JSON.parse(fs.readFileSync('./shared/brews/awesome_brew.json', 'utf8'));

// Fall back on index
app.get('*', function (req, res) {

	//console.log("BREW", defaultBrew);

	vitreumRender({
		page: './build/beertimer/bundle.dot',
		globals:{
			defaultBrew : defaultBrew
		},
		prerenderWith : './client/beertimer/beertimer.jsx',
		initialProps: {
			url: req.originalUrl
		},
		clearRequireCache : !process.env.PRODUCTION,
	}, function (err, page) {
		return res.send(page)
	});
});

var port = process.env.PORT || 8000;
app.listen(port);
console.log('Listening on localhost:' + port);
