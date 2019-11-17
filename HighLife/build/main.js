"use strict";

var _express = _interopRequireDefault(require("express"));

var _webpackDevServer = _interopRequireDefault(require("webpack-dev-server"));

var _webpack = _interopRequireDefault(require("webpack"));

var _posts = _interopRequireDefault(require("./routes/posts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 3000;
var devPort = 3001;

if (process.env.NODE_ENV == "development") {
  console.log("Server is running on development mode");

  var config = require("../webpack.dev.config");

  var compiler = (0, _webpack["default"])(config);
  var devServer = new _webpackDevServer["default"](compiler, config.devServer);
  devServer.listen(devPort, function () {
    console.log("webpack-dev-server is listening on port", devPort);
  });
}

app.use("/", _express["default"]["static"](__dirname + "/../public"));
app.get("/hello", function (req, res) {
  return res.send("Can you hear me?");
});
app.use("/posts", _posts["default"]);
var server = app.listen(port, function () {
  console.log("Express listening on port", port);
});