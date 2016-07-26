var webpack = require('webpack');
var config = {};

config.entry = './index';
config.output = {
  path: '.',
  filename: 'bundle.js',
};
config.module = {
  loaders: [
    {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    },
  ],
};
config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
];

module.exports = config;
