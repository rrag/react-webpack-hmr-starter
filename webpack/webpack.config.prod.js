
var webpack = require("webpack");

var prodConfig = Object.create(require("./webpack.config.dev.js"));
prodConfig.plugins.push(
	new webpack.DefinePlugin({
		"process.env": {
			// This has effect on the react lib size
			NODE_ENV: JSON.stringify("production")
		}
	}),
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.UglifyJsPlugin()
);

prodConfig.output.filename = prodConfig.output.filename.replace(".js", ".min.js");

prodConfig.plugins.push(new webpack.DefinePlugin({
	__DEBUG__: false,// <-------- use debug output in prod HERE
}));

module.exports = prodConfig;
