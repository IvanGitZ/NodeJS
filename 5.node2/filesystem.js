var fs = require("fs");

// var readMe = fs.readFileSync('readMe.txt',"utf8");
// // console.log(readMe);

// fs.writeFileSync("writeMe.txt","Hello World");

// //异步 读取 & 写入

// fs.readFile("readMe.txt","utf8",function(err,data){
// 	// if (err) throw err;//异常抛出 try catch throw
// 	console.log(data);
// });
// console.log(123);
// //先打印123,实现异步

// fs.writeFile("writeMe.txt","Hello Event",function(err,data){
// 	if (err) throw err;//异常抛出 try catch throw
// 	console.log(data);
// })

//异步读取文件
//并将读取的文件内容写入到writeMe.txt
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	fs.writeFile("writeMe.txt",data);
// })

// fs.unlink("writeMe.txt",function(err){
// 	if (err) throw err;
// });

//创建文件夹
// fs.mkdir("stuff1",function(err){

// });

//删除文件夹
fs.rmdir("stuff");




















