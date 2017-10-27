// var express = require("express");//返回的是一个方法
// var app = express();//返回的是一个对象

// app.listen(8080);//不用写127.0.0.1默认识别本机ip地址
//已成功搭建服务器

var express = require("express");//返回的是一个方法
var app = express();//返回的是一个对象

//路由
app.get('/',(req,res) => {
	// console.log(req.url);//当前的路径
	res.send("This is Home page");//显示在网页上
})
app.get('/contact',(req,res) => {
	res.send("This is Contact page");
})
//路由参数
app.get('/blogs/:myid',(req,res) => {
	console.log(req);
	res.send("具体的路由参数为: "+req.params.myid)
})
app.listen(8080);//不用写127.0.0.1默认识别本机ip地址