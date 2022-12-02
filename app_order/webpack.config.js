const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './bootstrap.js',
  output: {
    clean: true,
    // publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
    ],
  },
  optimization: {
    chunkIds: 'named',
  },
  devServer: {
    static: './dist',
  },
  plugins:[
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: 'orderCommon',
      filename: 'order-remote.js', // 容器入口文件
      // exposes: {
      //   "./list": "./list.vue",
      // },
      shared: {
        vue: {
          singleton: true
        }
      },
      remotes: {
        "@appCommon": 'appCommon@http://localhost:8080/dist/app-remote.js',
      }
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../template.html')
    }),
  ]
};