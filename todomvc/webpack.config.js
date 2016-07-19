const webpack = require('webpack');

const config = {
  devtool: 'eval-source-map',
  entry: './index',
  output: {
    path: '.',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'raw']
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('loc.phan')
  ],
  devServer: {
    contentBase: '.',
    port: 3000,
    inline: true,
    colors: true,
    historyApiFallback: true
  }
};

module.exports = config;
