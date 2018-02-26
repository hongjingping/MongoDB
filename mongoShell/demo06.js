// hasNext 是否有下一条
var db = connect("company");//进行链接对应的集合collections
var result = db.workMate.find();//声明变量result，并把查询结果赋值给result
//利用游标的hasNext()进行循环输出结果。
// while(result.hasNext()){
//   printjson(result.next()) //用json格式打印结果
// }

result.forEach(result => {
  printjson(result)
});