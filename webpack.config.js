var webpack = require('webpack');


module.exports = {
	entry: [
		'./src/scripts/index.js'
	],
	output: {
		path: __dirname + "/build/scripts/",
		filename: "react-webpack-hmr-starter.js",
		publicPath: 'js/'
	},
	module: {
		loaders: [
			{ test: /\.(js|jsx)$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ },
			{ test: /\.scss$/, loaders: ['style', 'css', 'autoprefixer', 'sass?outputStyle=expanded'], exclude: /node_modules/ }
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	externals: {
		'react': 'React'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss']
	}
}