'use strict';
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const NODE_ENV = process.NODE_ENV || "development";
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: "index"
  },
  devServer: {
    compress: true,
    port: 9000
  },
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: NODE_ENV == "development" ? "source-map" : null,
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: "./index.html",
      filename: "./index.html",
    })
  ],
  module: {
    rules: [
              {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              ]
            }
          ]
        }
}
