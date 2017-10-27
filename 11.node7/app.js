var express = require("express");
var app = express();

app.set("view engine","ejs");//ejs为视图引擎,模板引擎

app.use("/assets",express.static('assets'));//使用静态css文件

app.get("/",(req,res) => {
	//res.send只能返回纯文本,就相当于res.end();
	// res.send(__dirname+"/index.html");

	//识别html的话使用sendFile
	// res.sendFile(__dirname+"/index.html");

	//识别views文件夹下的index.ejs
	res.render("index");	
});
app.get("/contact",(req,res) => {
	res.render("contact");	
});
//路由参数
app.get("/blogs/:myid",(req,res) => {
	var myData = [
		{title:"Express学习 lesson-1",author:"Ivan ",body:"To learn Express lesson-1"},
		{title:"Express学习 lesson-2",author:"Silly",body:"To learn Express lesson-2"},
		{title:"Express学习 lesson-3",author:"Alice",body:"To learn Express lesson-3"}
	];
	res.render("blog",{id:req.params.myid,data:myData});
});
app.listen(8080);