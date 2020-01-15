const express = require("express");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const safari = require("safari");

const config = require("./webpack.config.js");
const transpiler = webpack(config);
const middleware = webpackMiddleware(transpiler, {
  publicPath: config.output.publicPath,
  watchOptions: {
    ignored: /.*/
  }
});

const app = express();
app.use(middleware);
app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: __dirname
  });
});

const port = 8848;
app.listen(port);

const url = `http://localhost:${port}`;
console.log(`Launching website at: ${url}`);
safari.open(url);