//引入一个模块,返回一个对象
var http = require("http");
// console.log(http);

//回调函数不会立即执行,当执行了server.listen后才开始执行回调函数
var server = http.createServer(function(req,res){
	//建立连接

	//在服务器(终端)打印
	console.log('客户端和服务器已经建立通讯' + req.url);
	
	//HTTP头部(如果是字符串类型就不需要写,如果返回的是json和html数据就需要写)
	res.writeHead(200,{"Content-type":"text/plain"});

	//在客户端(页面)打印出来
	res.end("Hey NodeJs");
	
});

//在浏览器中输入127.0.0.1:8080后会执行这个
server.listen(8080,"127.0.0.1");

console.log("server is running...");