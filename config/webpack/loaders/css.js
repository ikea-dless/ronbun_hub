module.exports = {
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[name]_[local]_[hash:base64:5]'
      }
    }
  ]
}
