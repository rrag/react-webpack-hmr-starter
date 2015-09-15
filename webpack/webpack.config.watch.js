
var webpack = require("webpack");

var devPort = 8090;

var watchConfig = Object.create(require("./webpack.config.base.js"));

watchConfig.debug = true;
watchConfig.devtool = "inline-sourcemap"; //eval

watchConfig.entry.push("webpack/hot/only-dev-server");
watchConfig.entry.push("webpack-dev-server/client?http://localhost:" + devPort);

watchConfig.module.loaders[0] = { test: /\.(js|jsx)$/, loaders: ["react-hot", "babel"], exclude: /node_modules/ };

watchConfig.devServer = {
	port: devPort,
	contentBase: "examples",
};

watchConfig.output.publicPath = "http://localhost:" + devPort + "/" + watchConfig.output.publicPath

watchConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
watchConfig.plugins.push(new webpack.DefinePlugin({
	__DEBUG__: true,// <-------- use debug HERE
}));

module.exports = watchConfig;