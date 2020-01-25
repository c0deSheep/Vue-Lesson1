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


