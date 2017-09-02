const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');

const sourcePath =  path.join(__dirname, './src');
const buildPath = path.join(__dirname, './build');
const jsPath = path.join(__dirname, './src');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html',
  }),
  new DashboardPlugin(),
  new webpack.HotModuleReplacementPlugin()
];

const rules = [{
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader?sourceMap',
  ]},
  {
  test: /\.js$/,
  include: path.resolve(__dirname, 'src'),
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader'
  }]}
];

module.exports = {
  context: jsPath, 
  entry: {
    js: './index.js'
  }, 
  output: {
    path: buildPath, 
    publicPath: '/', 
    filename: 'bundle.js'
  },
  module: {
    rules
  }, 
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  plugins, 
  devServer: {
    historyApiFallback: true,
    contentBase: 'sourcePath',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    }
  }

}
