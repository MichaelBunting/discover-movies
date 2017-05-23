const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const axios = require('axios');
const dotenv = require('dotenv').config();
const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

// app.use('/test', function(req, res) {
//     axios.get('https://api.themoviedb.org/3/discover/movie?api_key=32afd7888473b024d2024908ce0df8c4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
//         .then(function(data) {
//             res.send(data.data);
//         });
// })

app.use(express.static(__dirname + '/www'));

const server = app.listen(3000, '127.0.0.1', function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
