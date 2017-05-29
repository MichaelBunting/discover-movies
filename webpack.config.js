const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            TMDB_API_KEY: JSON.stringify('32afd7888473b024d2024908ce0df8c4'),
        }
    }),
    new WebpackNotifierPlugin({
        title: 'Webpack bundle compiled'
    }),
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  node: {
    fs: 'empty',
  },
};
