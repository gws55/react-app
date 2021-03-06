const clean = require('./clean');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const bs = require('browser-sync');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// bundler reference
const bundler = webpack(webpackConfig);

// start browserSync server with webpack middleware
bs.create();
bs.init({
	server: {
		baseDir: 'public'
	},
	middleware: [
		webpackDevMiddleware(bundler, {
			publicPath: webpackConfig.output.publicPath,
			stats: webpackConfig.stats
		}),
        webpackHotMiddleware(bundler)
	],
	// watch files
	files: [
		'public/**/*.js',
		'public/**/*.css',
		'public/**/*.html'
	]
});
