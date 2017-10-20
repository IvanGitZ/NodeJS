var fs = require("fs");
var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
// console.log(myReadStream);

//data为固定,激活data方法
myReadStream.on("data",function(chunk){
	console.log('============接受chunk=============');
	console.log(chunk);
});