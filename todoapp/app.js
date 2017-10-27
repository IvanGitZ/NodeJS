var express = require('express');
var app = express();
app.set("view engine","ejs");
app.use("/assets",express.static(__dirname+"/assets"));

var todoController = require("./controller/todoController");
todoController(app);//相当于函数回调,将app对象传回
app.listen(8080);