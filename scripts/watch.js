var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("../webpack/webpack.config.watch.js");
var watchConfig = Object.create(webpackConfig);

var watchCompiler = webpack(watchConfig);
// Start a webpack-dev-server
var server = new WebpackDevServer(watchCompiler, {
	publicPath: watchConfig.output.publicPath,
	hot: true,
	contentBase: watchConfig.devServer.contentBase,
	quiet: false,
	noInfo: false,
	stats: {
		colors: true
	}
});

server.listen(watchConfig.devServer.port, "localhost", function(err) {
	if (err) throw new Error("webpack-dev-server", err);
	console.log("[webpack-dev-server]", "http://localhost:%s/webpack-dev-server/index.html", watchConfig.devServer.port);
});

var path = require("path");
var serveStatic = require("serve-static")

// server.app.use(serveStatic("build"));
server.app.use(serveStatic(path.join(__dirname, "..", "node_modules")));
