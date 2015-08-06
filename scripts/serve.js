
module.exports = function(basePath, port) {
	var express = require("express");
	var path = require("path");
	var app = express();
	app.use(express.static(path.join(basePath, "examples")));
	app.use(express.static(path.join(basePath, "node_modules")));
	app.use(express.static(path.join(basePath, "build")));

	app.listen(port);
}