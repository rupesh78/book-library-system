const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
     },
  module: {
    rules: [
      {
          test: /\.js|.jsx$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader'
          },
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      },
      {
          test: /\.(scss)$/,
          use: [
              {
                  loader: 'style-loader',
                  options: {
                      sourceMap: true
                  }
              },
              {
                  loader: 'css-loader',
                  options: {
                      modules: true,
                      importLoaders: 1,
                      sourceMap: true
                  }
              },
              {
                  loader: 'sass-loader',
                  options: {
                      sourceMap: true
                  }
              }
          ]
      },
      {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Book Library System',
      inject: false,
      template: require('html-webpack-template'),
      headHtmlSnippet: '<style>html, body {padding: 0; margin: 0;}</style>',
      appMountId: 'app'
    })
  ]
};