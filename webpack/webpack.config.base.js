var webpack = require("webpack");
var path = require("path");
var root = path.join(__dirname, "..");


module.exports = {
	entry: [
		path.join(root, "src/scripts/index.js")
	],
	output: {
		path: path.join(root, "build", "dist"),
		filename: "bundle.js",
		publicPath: "js/"
	},
	module: {
		loaders: [
			{ test: /\.(js|jsx)$/, loaders: ["babel"], exclude: /node_modules/ }, // keep this in index 0
			{ test: /\.scss$/, loaders: ["style", "css", "autoprefixer", "sass?outputStyle=expanded"], exclude: /node_modules/ },
			{ test: /\.png$/, loader: "url-loader?mimetype=image/png" },
			{ test: /\.json$/, loader: "json" },
		]
	},
	devtool: "sourcemap",
	debug: true,
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	// if Using externals uncomment the block of code from render.jsx
	// refer to https://github.com/gaearon/react-hot-loader/blob/master/docs/README.md#usage-with-external-react for why
	externals: {
		"react": "React"
	},
	progress: true,
	resolve: {
		extensions: ["", ".js", ".jsx", ".scss"]
	}
}