const path = require('path');
const isDebug = true;
const isVerbose = false;

const config = {
	context: path.resolve(__dirname, '../'),
	entry: path.resolve(__dirname, '../index.js'),
	output: {
		path: path.resolve(__dirname, '../build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ["react", "es2015"]
				}
			}
		]
	},
	// What information should be printed to the console
	stats: {
		colors: true,
		reasons: isDebug,
		hash: isVerbose,
		version: isVerbose,
		timings: true,
		chunks: isVerbose,
		chunkModules: isVerbose,
		cached: isVerbose,
		cachedAssets: isVerbose,
	}
};
module.exports = config;
