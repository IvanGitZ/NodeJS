var http = require("http");
var fs = require("fs");

//连接一个html文件
var server = http.createServer(function(req,res){
	/*
		text/plain : 返回的是纯文本
		text/html : 返回的是html
		text/application/json : 返回的是json
	*/

	//请求头
	// res.writeHead(200,{"Content-type":"text/html"});
	// var myReadStream = fs.createReadStream(__dirname+"/index.html","utf8");
	// myReadStream.pipe(res);

	// res.writeHead(200,{"Content-type":"text/application/json"});
	// var myReadStream = fs.createReadStream(__dirname+"/users.json","utf8");
	// myReadStream.pipe(res);

	res.writeHead(200,{"Content-type":"text/application/json"});
	var users = {
		name:"Henry",
		age:30,
		gender:"male"
	};
	res.end(JSON.stringify(users));
})
server.listen(8080,"127.0.0.1");
console.log("Server is running...");