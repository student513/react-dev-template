const { merge } = require("webpack-merge")
const config = require("../webpack.config.js")

module.exports = merge(config, {
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    contentBase: "../dist",
    host: "localhost",
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
})
