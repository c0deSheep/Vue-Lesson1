//导入压缩js插件包，刚刚安装的包
const UglifyJsWebPackPlugin = require('uglifyjs-webpack-plugin');
//配置合并包的方法
const webpackMerge = require('webpack-merge');
//将同级的base.config.js代入这里，并进行合并
const baseConfig =require('./base.config');
//模块带出，通过配置合并的方法
module.exports = webpackMerge(baseConfig,{
  // 插件使用
  plugins:[
    // 使用第三方将发布版本js代码压缩npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
    // 但是在开会阶段，暂不需要压缩，真正发布才取需要
    new UglifyJsWebPackPlugin()
  ]
})

