const path = require("path")
const postcssConfigPath = path.resolve(process.cwd(), '.postcssrc.yml')

module.exports = {
  test: /\.css$/,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        modules: true,
        localIdentName: "[name]_[local]_[hash:base64:5]"
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        config: {
          path: postcssConfigPath
        }
      }
    }
  ]
}
