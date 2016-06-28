var vitreumTasks = require("vitreum/tasks");
var gulp = require("gulp");

var gulp = vitreumTasks(gulp, {
	entryPoints: ["./client/beertimer"],

	DEV: true,

	buildPath: "./build/",
	pageTemplate: "./client/template.dot",

	projectModules: ["./shared/beertimer","./shared/codemirror"],

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
		"*.mp4",
		"*.mp3",
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

		//From ./shared
		"codemirror",
		'codemirror/mode/javascript/javascript.js',

	],
	clientLibs: [

	],
});
