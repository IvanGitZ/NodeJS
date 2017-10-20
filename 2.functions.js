// 在Nodejs中经常使用函数表达式

// 正常函数

// function sayHi(){
// 	console.log("Hello World");
// }
// //正常函数调用时才将函数放入内存

// var sayHi = function(){
// 	console.log("Hello Nirld");
// }//只会打印函数表达式

// //函数表达式在=赋值时就已经将函数运行结果放入内存(右左法则)


// sayHi();//调用的时候在内存中先找到变量sayHi的值,就不会再去将正常函数调用放入内存


function sayHi1(){
	console.log("Hello sayHi1");
}

var sayHi2 = function(){
	console.log("Hello sayHi2");
}

function callFunction(foo){
	foo();
}

callFunction(sayHi1);






