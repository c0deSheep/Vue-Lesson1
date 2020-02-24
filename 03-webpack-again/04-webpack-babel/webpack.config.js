// require是node语法
const path = require('path')

module.exports = {
  entry : path.join(__dirname,'./src/main.js'),

  output : {
    path : path.join(__dirname,'./dist'),
    filename : 'bundle.js'
  },

  module: {
    rules : [
      {test : /\.js$/, use : 'babel-loader', exclude : /node_modules/}
    ]
  }
}