var stuff = require("./module");
// console.log(stuff);//是一个对象

//文件模块化
console.log(stuff.counter(["1","2"]));
console.log(stuff.adder(3,5));
//上面两个为函数,下面pi为一个变量
console.log(stuff.pi);
