const HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'index.js',
    //La linea de abajo ayuda en el modo de desarrollo a redireccionar todo a index.js desde webpack
    //publicPath: '/'   
  },
  devServer: {
   historyApiFallback: true,
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
        test: /\.css$/i,
        /* use: [MiniCssExtractPlugin.loader, "css-loader"], */
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              /* /2CV13ID5IDP3 */
              publicPath: "./",
            },
          },
          "css-loader",
        ],
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
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    /*new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["main"],
      hash: false,
    }),*/
    new MiniCssExtractPlugin(),
  ],
};
