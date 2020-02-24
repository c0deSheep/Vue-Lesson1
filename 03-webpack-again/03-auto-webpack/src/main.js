// 这个main.js就是所有JS入口文件

// 1.导入Jquery
// import ** from ** 是es6导入模块的方式
// 由于es6的import和node的语法不兼容，会报错，这个时候就需要webpack

import $ from 'jquery'
// 相当于 const $ = require('jquery')

$(function () {
  $('li:odd').css('backgroundColor','green')
  $('li:odd').css('listStyle','none')
  $('li:even').css('backgroundColor','blue')
})

// ------------------------- part 1 ------------------------------------
// 手动打包：
//使用 webpack 4以下的打包命令为 ： webpack 要打包文件的路径  打包好输出的文件路径（包括新成文件的名称）
//使用 webpack 4的打包命令为 ： webpack 要打包文件的路径 -o  打包好输出的文件路径 -o
// 注意4的打包命令的是-o不是-0零

// 手动打包不想每次都输入地址的配置：
// 4以下如果不想每次打包都要输目录就需要配置webpack
// 需要配置webpack，需要在根目录下创建一个webpack.config.jse 的js
// 配置完，直接webpack指令就可以打包



// -------------------------- part 2 -----------------------------------
// 如果不想手动打包，需要自动打包，可以配置
// 1.先安装一个webpack-dev-server 打包插件：
//    npm install webpack-dev-server @2.9.4 --save-dev
// 2.安装好之后，并不是直接在powershell终端执行命令，而是需要在webpack.config.js中配置相关设置。
// 3.按照配置好的设置运行代码：
//   npm run KeyWordYouConfig



// ---------------------------part 3 -----------------------------------

// 使用import 语法，导入 CSS样式表等非js文件
import './css/index.css'

// 注意：webpack，默认只能打包处理JS类型的文件，无法处理其他的非JS类型的文件
// 如果要处理 非JS类型的文件， 需要手动安装以下 合适 第三方 loader 加载器
// 1.如果需要打包处理css 文件，需要安装npm i style-loader css-loader -save -d
// 2.打开webpack.config.js 配置文件，在里面，新增一个配置节点： module ，它是一个对象，在这个module对象身上，rules属性，
//   这个rules属性是一个数组，存放了所有第三方文件 的 匹配  和  处理规则
// 3.在调用loader时候，是从后往前调用的
// 4.当最后一个loader调用完毕，会把处理的结果直接交给webpack进行打包合并 ， 最终输出到bundle.js中

// 注意2：在引入的css文件中有url图片地址的，也会直接报错，进而需要安装url-loader和file-loader


