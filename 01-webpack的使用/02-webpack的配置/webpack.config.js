//用webpack.config.js配置webpack出入口，在别的js文件中就不需要再操作

//使用node动态获取绝对定位：
//1.首先初始化node 控制台输入：npm init
//2.
const path = require('path');

module.exports= {
  //入口js
  entry:'./src/main.js',
  //出口js
  output:{
    //.resolve(__dirname , '文件名')，是nodejs方法就用于返回一个绝对位置
    path:path.resolve(__dirname ,'dist'),
    filename:'bundle.js'
  },
}