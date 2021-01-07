const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar')
const path = require('path');

const config = {
  entry: {
    index: './static/src/pages/test.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/, use: [
          MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i, use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              publicPath:'../'
            }
          },
          'css-loader',
          'sass-loader']
      },
      {
        test: /\.less$/, use: [  
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              publicPath:'../'
            }
          },
           'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            }
          },
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   title: 'index',
    //   filename: 'index.html',
    //   chunks: ["index"]
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    }),
    new WebpackBar()
  ]
}
module.exports = config