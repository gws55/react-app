const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = () => {
    const bundler = webpack(webpackConfig);
    bundler.run((err, stats) => {
        if (err) {
            console.log(err);
        } else {
            console.log(stats.toString(webpackConfig.stats));
        }
    });
};
