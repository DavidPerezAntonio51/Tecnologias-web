const HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
      filename: "[name].js"
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
    /* new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }), */
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["main"],
      hash: false,
    }),
    new MiniCssExtractPlugin(),
  ],
};
