var webpack = require('webpack');


module.exports = {
	entry: [
		'./src/scripts/index.js'
	],
	output: {
		path: __dirname + "/build/scripts/",
		filename: "bundle.js",
		publicPath: 'js/'
	},
	module: {
		loaders: [
			{ test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
			{ test: /\.scss$/, loaders: ['style', 'css', 'autoprefixer', 'sass?outputStyle=expanded'], exclude: /node_modules/ }
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	// if Using externals uncomment the block of code from render.jsx
	// refer to https://github.com/gaearon/react-hot-loader/blob/master/docs/README.md#usage-with-external-react for why
	/*externals: {
		'react': 'React'
	},*/
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss']
	}
}