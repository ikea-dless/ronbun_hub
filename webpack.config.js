var path = require("path")

module.exports = {
  entry: {
    app: path.resolve(__dirname, "app/frontend/Index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    modules: [
      path.resolve(__dirname, "app/frontend"),
      path.resolve(__dirname, "node_modules")
    ],
    extensions: [".ts", ".tsx", ".js"]
  },
  resolveLoader: {
    modules: [
      "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [ "ts-loader" ]
      }
    ]
  }
}
