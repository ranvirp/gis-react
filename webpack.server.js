const path = require("path");
const LoadablePlugin = require('@loadable/webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/awshandler/handler.js",

  target: "node",

  externals: [],
  plugins: [new LoadablePlugin(), new MiniCssExtractPlugin()],

  output: {
    path: path.resolve("server-build"),
    filename: "handler.js",
    library: "handler",
    libraryTarget: "umd",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {

        test: /\.svg$/,

        use: [

          {

            loader: 'svg-url-loader',

            options: {

              limit: 10000,

            },

          },

        ],

      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ],
  },
};

