console.time('Loading plugins');

var gulp = require('gulp'),
  del = require('del'),
  gutil = require("gulp-util"),
  webpack = require("webpack"),
  webpackConfig = require("./webpack.config.js"),
  browserSync = require('browser-sync')

console.timeEnd('Loading plugins');


gulp.task("default", function() {
	gutil.log('Usage gulp [', gutil.colors.magenta('task'), ']');
	gutil.log('List of available ', gutil.colors.magenta('tasks'));
	gutil.log(gutil.colors.magenta('clean'), '   clean the ./build directory');
	gutil.log(gutil.colors.magenta('build'), '   create a production build with minified assets');
	gutil.log(gutil.colors.magenta('dev'), '     create a dev build with assets and sourcemap');
	gutil.log(gutil.colors.magenta('watch'), '   build and watch the changes. Hot reload styles and javascript');
	gutil.log('          Launches a browser at localhost:3500 and does a hot reload');
	gutil.log('          on change of *.scss under src/styles/');
	gutil.log('          on change of *.js[x]? under src/scripts/subfolder');
	gutil.log(gutil.colors.magenta('serve'), '   serve a webserver on localhost:3500');
});

gulp.task("clean", function(cb) {
	del(["build"], cb);
});

gulp.task("build", function(cb) {
	// run webpack
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		})
		, new webpack.optimize.DedupePlugin()
		, new webpack.optimize.UglifyJsPlugin()
	);

	var compiler = webpack(myConfig);

	compiler.run(function(err, stats) {
	if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		cb();
	});
})


gulp.task("dev", ["clean"], function(callback) {

	// modify some webpack config options
	var myDevConfig = Object.create(webpackConfig);
	myDevConfig.devtool = "sourcemap";
	myDevConfig.debug = true;
	// create a single instance of the compiler to allow caching
	var devCompiler = webpack(myDevConfig);

	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});


gulp.task("watch", ["serve"], function(callback) {
	var WebpackDevServer = require("webpack-dev-server");

	// modify some webpack config options
	var watchConfig = Object.create(webpackConfig);

	watchConfig.entry.push('webpack-dev-server/client?http://localhost:8090');
	watchConfig.entry.push('webpack/hot/only-dev-server');

	watchConfig.devtool = "sourcemap";//"eval";
	watchConfig.debug = true;
	watchConfig.externals = null; // if externals are present hot reload does not work.
	watchConfig.output.publicPath = "http://localhost:8090/" + watchConfig.output.publicPath

	watchConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

	var watchCompiler = webpack(watchConfig);
	// Start a webpack-dev-server
	var server = new WebpackDevServer(watchCompiler, {
		publicPath: watchConfig.output.publicPath,
		hot: true,
		quiet: false,
		noInfo: false,
		stats: {
			colors: true
		}
	});

	server.listen(8090, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8090/webpack-dev-server/index.html");
	});
	callback();
});


gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: ["examples/", "node_modules/", "build/"]
		},
		ui: {
			port: 9080
		},
		port: 3500
	});
});
