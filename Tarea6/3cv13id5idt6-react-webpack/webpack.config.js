const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
      filename: "main.js"
      },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      }
    ],
  },
  plugins: [
    /* new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }), */
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    })
  ],
};
