const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const obj=merge(common, {
  mode: 'development',
  devtool: false,
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 9000,
    overlay: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'css/[name].css'
    })
  ]
})

module.exports= obj