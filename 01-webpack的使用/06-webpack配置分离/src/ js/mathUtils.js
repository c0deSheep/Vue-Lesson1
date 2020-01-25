function add(num1,num2) {
  return num1 + num2;
};

function mul (num1 , num2) {
  return num1 *  num2
};

//commonjs代码，浏览器不适应
module.exports = {
  add,
  mul
}