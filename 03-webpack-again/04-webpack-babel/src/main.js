import $ from 'jquery'

$(function () {
  $('li:odd').css('backgroundColor','green')
  $('li:odd').css('listStyle','none')
  $('li:even').css('backgroundColor','blue')
})


 // class 关键字 是ES6中提供的新语法，是用来实现es6中面向对象变成的方式
class Person {
  //使用关键字static ，可以定义静态属性
  //所谓静态属性，就是通过类名，可以直接访问的属性
  //实例属性 ： 只能通过类的实例，来访问的属性，叫实例属性
 static info = {
   name : 'young',
   age : 24
}
}
const p1 = new Person()

console.log(Person.info)

// // 它的前身就是es5中的构造函数
// function Animal (name) {
//   this.name = name
// }
//
// var a1 = new Animal('lucky')

// 但是webpack只能处理一部分的 ES6语法，一些更高级的无法处理，需要第三方loader，loader处理后，返回给webpack打包

// 这里就是通过Babel，可以将高级语法装低级语法
// 1.webpack中，可以运行两套命令，安装两套包，去安装babel相关的loader功能，1.1是转换工具，1.2是语法

  // 1.1   npm babel-core babel-loader babel-plugin-transform-runtime -d
  //  注意：如果安装不成功则安这个版本安装，对应webpack3.6
  //  cnpm install babel-core@6 babel-loader@7 babel-plugin-transform-runtime@6 -D

  // 1.2. npm babel-preset-env babel-preset-stage-0 -d

// 2.打开webpack的配置文件，再module节点下的rules数组中，加一个匹配规则：

  // 2.1 { test : /\.js$/, use : 'babel-loader', exclude : /node_modules/ }

  // 2.2 注意：在配置bebel 的loader 规则时候， 必须将node_module目录通过exclude选项排除掉，原因有二：

      // 2.2.1 node_modules中有许多js文件，打包起来非常慢

      // 2.2.2 node_modules打包后也无法运行

// 3.在项目的 根目录中，新建一个叫 .babelrc 的吧Babel配置文件，这个配置文件，属于JSON格式，所以语法规范需要符合，不能写注释，字符串必须使用双引号

  // 3.1 在 .babelrc 写如下配置：  preset可以视作语法的意思
  //         {
  //           "presets" : ["env", "stage-0"],
  //           "plugins" : ["transform-runtime"]
  //         }

// 4.了解：目前，安装的babel-preset-env是比较新的es语法，此前安装的是babel-preset-es2015，即es6语法，而babel-preset-env包含了所有
// 和 es****相关的语法