const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  //将原本webpack中的某个js需要的抽出来放到这里
  // 设置本地服务器，这个也是真正开发时才需要，发布不需要设置本地服务器
  devServer : {
    contentBase:'./dist',
    inline:true
    //node_modules\.bin\webpack-dev-server,然后通过前面这行代码来运行本地服务器启动实时更新，按’ctl + c' 强制退出
  }
})