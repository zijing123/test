/**
 * Created by acer on 2015/12/28.
 */
//process stdout -->  standard output
//process.stderr -->  standard error
process.stdout.write("this is stdout");
process.stderr.write("this is stderr");

process.stdin.setEncoding("utf-8"); //只能设置utf-8 纯文本输入

//process.stdin.on("data",function(ttt){   //data事件 回调输入的内容
//    console.log(ttt);
//});

//process.stdin.on("readable",function(){
//   var data1= process.stdin.read();
//    console.log(data1);
//});

//process.on("exit",function(){   //程序退出
//   console.log("Program exit");
//});

//process.on("SIGINT",function(){   //改变程序退出时的行为(程序退出前可做的操作)
//    console.log("SIGINT");
//    process.exit();
//});

console.log(process.argv);