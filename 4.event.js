var event = require("events");
// console.log(event);



//js事件
// element.on("click",function(){
// 	//具体执行的代码
// })

//实例化事件对象
var myEmitter = new event.EventEmitter();
//注册事件
myEmitter.on("myEvent",function(){
	console.log("myEvent事件被触发!");
})
//激活事件
myEmitter.emit("myEvent");


// myEmitter.on("myEvent",function(msg){
// 	console.log(msg);
// })
// //激活事件
// myEmitter.emit("myEvent","myEvent事件被触发!");