/**
 * 浏览器中的 JavaScript 是没有文件操作的能力的
 * 但是 Node 中的 JavaScript 具有文件操作的能力
 */

//  fs 文件系统 提供了所有文件操作相关的API 例如：fs.readFile 就是用了读取文件
// 在node 中如果想要进行文件操作，就必须引入fs这个核心模块

//1、使用 require 方法加载fs核心模块
var fs = require('fs');

//2、读取文件
// 第一个参数就是要读取的文件的路径
// 第二个参数是一个回调函数
//     接收两个参数
//        error
//        data
fs.readFile('./data/hello.txt',function(error,data){
    // 文件中存储的都是二进制
    if(error){
      console.log("读取失败：",error);
    }else{
      console.log(data.toString());
    }
})