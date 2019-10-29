const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main.js'), // 项目入口文件
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      // 使用 vue-loader 解析 .vue 文件
      test: /\.vue$/,
      use: ['vue-loader']
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}