var vitreumTasks = require("vitreum/tasks");
var gulp = require("gulp");

var gulp = vitreumTasks(gulp, {
	entryPoints: ["./client/beertimer"],

	DEV: true,

	buildPath: "./build/",
	pageTemplate: "./client/template.dot",

	projectModules: ["./shared/beertimer"],

	additionalRequirePaths : ['./shared'],

	assetExts: ["*.svg", "*.png", "*.jpg", "*.pdf", "*.eot", "*.otf", "*.woff", "*.woff2", "*.ico", "*.ttf"],

	serverWatchPaths: ["server"],
	serverScript: "server.js",
	libs: [
		"react",
		"react-dom",
		"lodash",
		"classnames",
		"pico-router",
	],
	clientLibs: [],
});


var rename = require('gulp-rename');
var less = require('gulp-less');
gulp.task('phb', function(){
	gulp.src('./client/homebrew/phbStyle/phb.style.less')
		.pipe(less())
		.pipe(rename('phb.standalone.css'))
		.pipe(gulp.dest('./'));
})

