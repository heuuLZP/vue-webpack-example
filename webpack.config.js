const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main.js'), // 项目入口文件
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    alias: {
      assets: path.join(__dirname, 'src/assets/'),
      utils: path.join(__dirname, 'src/utils/')
    }
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [{
      // 使用 vue-loader 解析 .vue 文件
      test: /\.vue$/,
      use: ['vue-loader']
    },
    {
      test: /\.css$/,
      use: [
        'style-loader', 
        { 
          loader: 'css-loader', 
          options: { importLoaders: 1 } 
        },
        'postcss-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", //  将 CSS 转化成 CommonJS 模块
          { 
            loader: 'postcss-loader', 
            options: { sourceMap: true } 
          },
          "sass-loader", // 将 Sass 编译成 CSS，默认使用 Node Sass
          {
            loader: 'sass-resources-loader',
            options: {
              // Or array of paths
              resources: ['src/assets/scss/_variables.scss', 'src/assets/scss/_mixin.scss']
            },
          }
      ]
    },
    {
      test: /\.(png|jpg|jpeg|svg|gif)$/,
      use: [ {
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html' // 以 index.html 为模板
    })
  ]
}