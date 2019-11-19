"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _webpackDevServer = _interopRequireDefault(require("webpack-dev-server"));

var _webpack = _interopRequireDefault(require("webpack"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// HTTP REQUEST LOGGER
// PARSE HTML BODY
var app = (0, _express["default"])();
var port = 3000;
var devPort = 4000;
app.use((0, _morgan["default"])("dev"));
app.use(_bodyParser["default"].json());
app.use("/", _express["default"]["static"](_path["default"].join(__dirname, "./../public"))); // app.use("/api", api);

/*
    Express Codes 
*/

if (process.env.NODE_ENV == "development") {
  console.log("Server is running on development mode");

  var config = require("../webpack.dev.config");

  var compiler = (0, _webpack["default"])(config);
  var devServer = new _webpackDevServer["default"](compiler, config.devServer);
  devServer.listen(devPort, function () {
    console.log("webpack-dev-server is listening on port", devPort);
  });
}

var server = app.listen(port, function () {
  console.log("Express listening on port", port);
}); // import express from 'express';
// import path from 'path';
// import webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';
// import morgan from 'morgan'; // HTTP REQUEST LOGGER
// import bodyParser from 'body-parser'; // PARSE HTML BODY
// import mongoose from 'mongoose';
// import session from 'express-session';
// import api from './routes';
// const app = express();
// const port = 3000;
// const devPort = 4000;
// app.use(morgan('dev'));
// app.use(bodyParser.json());
// /* mongodb connection */
// const db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', () => { console.log('Connected to mongodb server'); });
// // mongoose.connect('mongodb://username:password@host:port/database=');
// mongoose.connect('mongodb://localhost/codelab');
// /* use session */
// app.use(session({
//     secret: 'CodeLab1$1$234',
//     resave: false,
//     saveUninitialized: true
// }));
// app.use('/', express.static(path.join(__dirname, './../public')));
// /* setup routers & static directory */
// app.use('/api', api);
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './../public/index.html'));
// });
// /* handle error */
// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });
// app.listen(port, () => {
//     console.log('Express is listening on port', port);
// });
// if(process.env.NODE_ENV == 'development') {
//     console.log('Server is running on development mode');
//     const config = require('../webpack.dev.config');
//     const compiler = webpack(config);
//     const devServer = new WebpackDevServer(compiler, config.devServer);
//     devServer.listen(
//         devPort, () => {
//             console.log('webpack-dev-server is listening on port', devPort);
//         }
//     );
// }