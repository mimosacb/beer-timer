require('app-module-path').addPath('./shared');

var _ = require('lodash');
var vitreumRender = require('vitreum/render');
var express = require("express");
var app = express();
app.use(express.static(__dirname + '/build'));


app.get('*', function (req, res) {
	vitreumRender({
		page: './build/beertimer/bundle.dot',
		globals:{},
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