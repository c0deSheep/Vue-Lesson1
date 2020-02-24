// 需要配置webpack，需要在根目录下创建一个webpack-config.js的js文件

// webpack是node语法，所以不能写es6语法
// 通过node中的模块操作，先外暴露了一个配置对象
module.exports = {
  // 配置文件中，需要手动指定入口文件和出口文件地址, 注意：控制台的地址的斜杠是\ ，而这里是/ ,因为两个方向不同
  entry:require('path').join(__dirname,'./src/main.js'),  // 入口，表示要使用webpack打包哪个文件

  output:{ //输出文件相关配置
    path : require('path').join(__dirname,'./dist'),  // 指定 打包好的文件，输出到哪个目录中去
    filename : 'bundle.js'   // 指定 输出的文件名称
  }
}