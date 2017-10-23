var http = require("http");
var fs = require("fs");

//使用路由就不需要进行网络请求,速度很快
var server = http.createServer(function(req,res){
	if (req.url !== "/favicon.ico") {
		// console.log(req.url);
		if (req.url == "/" || req.url == "/home"){
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/home.html");
			myReadStream.pipe(res);
		}else if(req.url == "/about"){
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/about.html");
			myReadStream.pipe(res);
		}else if(req.url == "/contact"){
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/contact.html");
			myReadStream.pipe(res);
		}else{
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/error.html");
			myReadStream.pipe(res);
		}
	}
	// res.writeHead(200,{"Content-type":"text/application/json"});
	// var myReadStream = fs.createReadStream(__dirname+"/users.json","utf8");
	// myReadStream.pipe(res);
})
server.listen(8080,"127.0.0.1");
console.log("Server is running...");