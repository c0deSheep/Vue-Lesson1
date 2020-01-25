// commonjs代码，浏览器不适应，通过webpack打包，转换为浏览器适应版本
// 1.使用commonjs的模块化规范
const {add,mul} = require('./ js/mathUtils.js');

console.log(add(20,30))
console.log(mul(20,30))


//导入es6模块，部分浏览器不适应，通过webpack打包，转换为浏览器适应版本
// 2.使用es6的模块化规范
import  * as info from './ js/info.js';
console.log(info.name);
console.log(info.age);
console.log(info.weight);

// 3.依赖css文件
require('./css/normal.css');

// 4.依赖less文件
require('./css/special.less');

// 5.使用vue进行开发
import Vue from 'vue';

//子组件用一个变量转载
// const App = {
//   template:`
// <!--      要用div包裹-->
//     <div>
//       <h2>{{message}}</h2>
//       <button @click="btn_click">按钮</button>
//       <h2>{{name}}</h2>
//     </div>
//   `,
//   data () {
//     return {
//       message:'Hello',
//       name:'young'
//     }
//   },
//   methods:{
//     btn_click () {
//       console.log('works!')
//     }
//   }
// }

// 倒数第二次：将上面这个代码再放入到src文件夹中的vuejs中导出，这里引入即可
// import App from './vue/app.js'

// 最后：通过上面js文件方法会混乱，所以用vue文件写入，将对应内容写到对应标签中，
// 然后安装对应的loader和配置vue的loader: vue-loader和vue-template-compiler----》
//                    npm install vue-loader vue-template-compiler --save -dev
// 再引入

import App from './vue/App.vue';


// const app =new Vue ({
new Vue ({
  el:'#app',
  //日后开发中，使用这个template进行编写标签标签，html中仅存放el代表标签
  //但是这个template如果写入太多html标签内容，会导致混乱，所以给这个vue实例注册一个子组件，
  // 并将自己需要的html标签内容写到子组件中，然后直接运用子组件的模块标签，形成一个闭环
  template:'<App></App>',
  // 注册子组件
  components: {
    //key时子组件的模块标签，value此时时变量存储子标签的实例
    App:App,
  }
})

document.writeln('<h2>yes yes yes </h2>')