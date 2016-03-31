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
		"pico-flux",
	],
	clientLibs: [

	],
});
