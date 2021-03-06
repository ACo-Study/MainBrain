var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: __dirname + "/public/",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          "babel-loader?" +
            JSON.stringify({
              cacheDirectory: true,
              presets: ["@babel/preset-env", "@babel/preset-react"]
            })
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
};
