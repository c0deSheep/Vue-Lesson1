// 启用热更新的第二步
// 导入webpack (安装npm i webpack@3.6.0 --save-d )
const webpack = require('webpack')
// -------------------分界线---------------------



 // 如果需要和js一样将生成的文件存储到内存中，需要以下第1步： 然后在plugins中配置
  // 导入在内存中生成HTML页面 的插件 (安装npm i html-webpack-plugin --save-d )
  const htmlWebpackPlugin =require('html-webpack-plugin')
//---------------------分界线-------------------------

module.exports = {
  // 需要打包的文件的地址
  entry:require('path').join(__dirname,'./src/main.js'),

  output : {
    path : require('path').join(__dirname,'./dist'),
    filename : 'bundle.js'
  },

  devServer : { // 这是配置dev-server命令参数的第二种形式，相对来说，这种麻烦些许
    // webpack-dev-server --open --port 3000 --contentBase src --hot
    open:true,//自动打开浏览器
    port:3000, // 设置启动时候的运行端口
    contentBase:'src', // 指定托管的根目录
    hot : true, //启用热更新 , 的第一步

  },

  plugins : [ //配置插件的节点
    new webpack.HotModuleReplacementPlugin(), // new 一个热更新 模块对象，这是热更新启用的第三步

    new htmlWebpackPlugin({
      template : require('path').join(__dirname,'./src/index.html'), // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面

      filename:'index.html'  //指定生成的页面的名称（这里的名称已和./src/index.html的名称无关，是存储到内存中的名称 ）
    })
  ],

  module : {  // 这个节点，用于配置所有第三方模块 加载器
    rules:[  // 所有第三方模块的 匹配规则
      { test: /\.css$/, use : ['style-loader' , 'css-loader']}, // 配置处理 .css文件的第三方loader规则,注意：这里的use的顺序是从右到左，
      // 配置css中引用url的模块加载器
      // {test: /\.(jpg|png|gif|bmp|jpeg)$/, use : 'url-loader'}
      // 同时在在use中使用的模块加载器，可以传递参数，格式和网页中的的query类似，都是在后面以?问号开头key=value形式
      // 这个urlloader就可以传递一个limit参数来限制图片大小，
      // 如果 limit给定的值，是图片的大小，单位是byte，大于等于limit不会转为base64格式的字符串， 小于limit这会被转为base64的值
      // 总之，limit要小于图片的真正大小
      // limit的目的是：让小图保真，让大图压缩
      {test: /\.(jpg|png|gif|bmp|jpeg)$/, use : 'url-loader?limit=8291'}
    ]
  }
}