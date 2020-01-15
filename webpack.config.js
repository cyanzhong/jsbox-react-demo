const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: ["./src/app.jsx"]
  },
  module: {
    rules: [
      {
        test: pattern => {
          return /\.(js|jsx)$/.test(pattern);
        },
        exclude: pattern => {
          return /node_modules/.test(pattern);
        },
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: pattern => {
          return /\.css$/.test(pattern);
        },
        exclude: pattern => {
          return /node_modules/.test(pattern);
        },
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: pattern => {
          return /\.(png|jp(e*)g|svg)$/.test(pattern);
        },
        exclude: pattern => {
          return /node_modules/.test(pattern);
        },
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  }
};