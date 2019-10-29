# vue-webpack-example

项目描述：不使用 `vue-cli` 工具，使用 `webpack 4.x` 搭建 `vue` 项目脚手架。

## 一、搭建步骤
  ### 1.1 新建项目

  ```
  mkdir vue-webpack-example
  cd vue-webpack-example
  npm init
  ```

  ### 1.2 安装基础依赖

  ##### 1.2.1 安装 webpack 依赖

  ```
  yarn add webpack webpack-cli -D
  ```

  详细请参考 [webpack 中文文档](https://webpack.docschina.org/guides/installation/#%E9%A2%84%E5%85%88%E5%87%86%E5%A4%87)

  ##### 1.2.2 安装 vue 依赖
  ```
  yarn add vue
  yarn add vue-loader vue-template-compiler -D
  ```

  ##### 1.2.2 安装 css 依赖

  ```
  yarn add style-loader css-loader -D
  ```

  ### 1.3 设置项目目录

  ```
   .
  |-- README.md
  |-- package.json
  |-- src
  |   |-- APP.vue // 页面主入口
  |   |-- assets // 静态资源
  |   |-- components // 组件
  |   |-- main.js // 脚本主入口
  |   |-- utils // 工具脚本
  |   |-- views // 页面
  |-- webpack.config.js
  `-- yarn.lock
  ```

  ### 1.4 添加 webpack 配置文件

  `vue-loader` 的作用：浏览器无法直接解析 `vue` 格式的文件， vue-loader 用来处理 `vue` 格式文件。 

  `css-loader` 的作用：css-loader会像 `import / require()` 一样解释 `@import和url()` 并将解析它们。

  `style-loader` 的作用：把 `css` 以 `<style></style>` 的方式注入到 `dom` 中。

  `VueLoaderPlugin` 的作用： 将你定义过的其它规则复制并应用到 `.vue` 文件里相应语言的块。例如，如果你有一条匹配 `/\.js$/` 的规则，那么它会应用到 `.vue` 文件里的 `<script>` 块。
  
  vue-loader 文档：[vue-loader 手动设置](https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE)

  ```js
  const path = require('path');
  const VueLoaderPlugin = require('vue-loader/lib/plugin');

  module.exports = {
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
  ```

