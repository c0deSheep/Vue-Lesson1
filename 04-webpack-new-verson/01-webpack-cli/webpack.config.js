module.exports = {
  mode : 'development',
//  production模式为产品版，会压缩，而且时间更久，只有将项目发布才需要设置

  // entry : require('path').join(__dirname, './src/index.js'),
  //
  // output : {
  //   path : require('path').join(__dirname, './dist'),
  //
  //   filename : 'bundle.js'
  // }


//webpack4后有默认规定，将src文件夹下的index.js打包到dist文件夹下叫main.js,如果按这种设定建目录和文件，则可以省略配置
}