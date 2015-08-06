var config = require("./webpack.config.base.js");

config.devtool = "sourcemap";
config.debug = true;

module.exports = config;
