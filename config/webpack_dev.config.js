const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./application');
const postcssConfig = require('./postcss');

module.exports = {
  resolve: {
    root: [
      path.resolve(config.appDir)
    ],
    alias: {
      config: path.resolve(config.configDir, 'env', config.env)
    },
    extensions: ['', '.js', '.jsx', '.css']
  },
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(config.appDir, 'application.jsx')
  ],
  output: {
    path: '/',
    publicPath: '/',
    filename: 'application.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(config.appDir, 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(config.env),
        'OAUTHIO_KEY': JSON.stringify(config.oauthioKey)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel'
      },
      {
        test: /\.jsx$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: [/app\/stylesheets\//],
        loader: 'style!css!postcss'
      },
      {
        test: /\.less$/,
        loader: 'css-loader!less-loader'
      },
      {
        test: /\.css$/,
        exclude: [/app\/stylesheets\//],
        loader: 'style!css?modules&importLoaders=1!postcss'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.(jpg|png|woff2|woff)$/,
        loader: 'url'
      }
    ]
  },
  postcss: postcssConfig
};
