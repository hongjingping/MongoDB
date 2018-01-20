var startTime = (new Date()).getTime(); // 得到开始时间
var db = connect('log');

// 批量操作
var tempArray = [];
for (let i = 0; i < 1000; i++) {
  tempArray.push({'num':i})
}
db.test.insert(tempArray)

// 循环插入
// for (let i = 0; i < 1000; i++) {
//   db.test.insert({'num': i})
// }

var runTime = (new Date()).getTime() - startTime; // 运行时间
print('[demo01] this run is' + runTime + 'ms');