var counter = function(arr){
	return `数值中拥有${arr.length}个元素`;
}

// console.log(counter(["Henry","2","3"]));

var adder = function(a,b){
	return `两个数的和为${a+b}`;
}

var pi = 3.142; 
//只有使用module.exports之后,其他文件才可以引用
//如果再次使用module.exports会将之前代替

//文件模块化
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//模块模式 Module Patterns
module.exports = {
	counter:counter,
	adder:adder,
	pi:pi
}