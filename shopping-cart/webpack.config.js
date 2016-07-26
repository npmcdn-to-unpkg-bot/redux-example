var path = require('path')
var webpack = require('webpack')

console.log('env webpack', process.env.NODE_ENV);
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: ['react', 'redux', 'react-dom', 'react-redux'],
    app: './index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.BannerPlugin('@2016 loc.phan'),
    new webpack.EnvironmentPlugin([
      "NODE_ENV"
    ])
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/,
        query: {
          fix: true
        }
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.json$/,
        loaders: [ 'json' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  },
  devServer: {
    contentBase: '.',
    port: 5000,
    inline: true,
    hot: true,
    colors: true,
    historyApiFallback: true
  }
}
