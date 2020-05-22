const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};