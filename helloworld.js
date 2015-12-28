/**
 * Created by acer on 2015/12/28.
 */
console.log('hello world!!!');
console.log(__dirname); //文件所在的绝对路径（不包含文件名）
console.log(__filename);//包含文件名的绝对路径
console.info("this is an info");
console.warn("this is a warn");
console.error("this is an error");
console.time('test');
for(var i=0; i<1000000;i++){

}
console.timeEnd("test");