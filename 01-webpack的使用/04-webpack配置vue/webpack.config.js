//用webpack.config.js配置webpack出入口，在别的js文件中就不需要再操作

//使用node动态获取绝对定位：
//1.首先初始化node 控制台输入：npm init
//2.引入这个path路径变量，这样编译代码后，编译时会到node_modules中寻找这个path文件夹
const path = require('path');

module.exports= {
  //入口js
  entry:'./src/main.js',
  //出口js
  output:{
    //通过这种方法可以打包到需要的位置和文件名
    //.resolve(__dirname , '文件名')，是nodejs方法就用于返回一个绝对位置
    path:path.resolve(__dirname ,'dist'),
    filename:'bundle.js',
  //  涉及url时配置这行代码,相当于再url前加入这个dist（为打包文件的地址）
    publicPath:'dist/'

  },
  //总结：所有配置打包module都是通过找到node_modules中的上一步安装了的对应文件在配置对应的代码
  //css文件的打包：
  // 1.先安装loader打包文件：npm install --save -dev css-loader
  // 1.5 安装css加载文件：npm install style-loader --save -dev
  // 2.配置webpack.config.js，如下代码，都是再rules下数组中用对象形式配置
  module:{
    rules:[
      //  2.5配置css
      {
        test:/\.css$/,
        //css-loader只负责加载css文件进行加载，style-loader负责加载css代码到DOM
        //使用多个loader时，是从右向左读取
        use:['style-loader','css-loader']
      },
      //less文件的打包：
      // 1.先安装loader打包文件：npm install --save-dev less-loader less
      // 1.5 安装css加载文件：npm install style-loader --save -dev
      // 2.配置webpack.config.js，如下代码
      {
        test:/\.less$/,
        //css-loader只负责加载css文件进行加载，style-loader负责加载css代码到DOM
        //使用多个loader时，是从右向左读取
        use:[
            {loader:'style-loader'},
          {loader:'css-loader'},
          {loader:'less-loader'}]
      },
        // file文件（图片）打包:
      // 1.先安装loader打包文件：npm install --save-dev url-loader
      // 2.配置加载文件代码如下：
      {
        test:/\.(png|gif|jpg|jpeg)$/,
        use:[
            {
          loader:'url-loader',
          options: {
            //当加载的图片，小于limit时，会将图片编译成base64字符串形式
            // 但图片大于limit时，会报错，显示需要file-loader模块加载，安装：npm install file-loader --save -dev
            limit:1000,
            //给图片在打包文件里创建文件夹，并将名字改成设置值，注意，名字需要[]表示变量
            name : 'images/[name].[hash:8].[ext]'

          },
        }]
      },
      //  通过babel转换js：从es6转换到es5
      {
        test:/\.js$/,
        // exclude:排除
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            //都有s
            presets:['es2015']
          }
        }
      },
      //  配置vue文件的loader
      {
        test:/\.vue$/,
        use:{loader:'vue-loader'}
      }

    ]
  },

  //打包vue
  // 1.先安装npm的vue:   npm install vue --save
  // 1.5.在编译区导入vue：import Vue from 'vue' , 编译会在node_modules中找刚刚安装的vue
  // 2.配置代码如下：
  //添加vue时，打包会报错，因为vue自身限制，需要声明解除限制
  resolve:{
    //alias：别名
    alias:{
      //将默认到node——modules找的的runtimevue换成vue.esm.js
      'vue$':'vue/dist/vue.esm.js'
    }
  }
}