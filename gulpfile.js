var vitreumTasks = require("vitreum/tasks");
var gulp = require("gulp");

var gulp = vitreumTasks(gulp, {
	entryPoints: ["./client/beertimer"],

	DEV: true,

	buildPath: "./build/",
	pageTemplate: "./client/template.dot",

	projectModules: ["./shared/beertimer"],

	additionalRequirePaths : ['./shared'],

	assetExts: [
		"*.svg",
		"*.png",
		"*.jpg",
		"*.pdf",
		"*.eot",
		"*.otf",
		"*.woff",
		"*.woff2",
		"*.ico",
		"*.ttf",
		"*.mp4"
	],

	serverWatchPaths: ["server"],
	serverScript: "server.js",

	libs: [
		"react",
		"react-dom",
		"isomorphic-fetch",
		"lodash",
		"classnames",
		"pico-flux",
	],
	clientLibs: [

	],
});
