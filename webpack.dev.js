const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 5000,
    open: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:8080'
    },
  }
});