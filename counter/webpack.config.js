var config = {};

config.entry = './index';
config.output = {
  path: '.',
  filename: 'bundle.js'
};
config.module = {
  loaders: [
    {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }
  ]
};
// TODO add webpack plugins here
config.devServer = {
  contentBase: '.',
  inline: true,
  colors: true,
  port: 5000
};

module.exports = config;
