const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const { ModuleFederationPlugin } = webpack.container;
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './bootstrap.js',
  // entry: './index.js',
  output: {
    clean: true,
    // publicPath: '/dist/',
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
      name: 'appCommon',
      filename: 'app-remote.js', // 容器入口文件
      exposes: {
        "./button": "./button.vue",
      },
      shared: { // 基础依赖，需要配合动态入口import
        vue: {
          singleton: true,
        }
      }
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../template.html')
    }),
  ]
};