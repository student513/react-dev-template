const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: "./src/index.jsx",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
}
