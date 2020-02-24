// 这个main.js就是所有JS入口文件

// 1.导入Jquery
// import ** from ** 是es6导入模块的方式
// 由于es6的import和node的语法不兼容，会报错，这个时候就需要webpack

import $ from 'jquery'
// 相当于 const $ = require('jquery')

$(function () {
  $('li:odd').css('backgroundColor','lightblue')
  $('li:even').css('backgroundColor','lightpink')
})

//使用 webpack 4以下的打包命令为 ： webpack 要打包文件的路径  打包好输出的文件路径
//使用 webpack 4的打包命令为 ： webpack 要打包文件的路径 -o  打包好输出的文件路径 -o
// 注意4的打包命令的是-o不是-0零