// =============13. db.runCommand() ===================
// db.workMate.update({'sex': 1}, {$set: { 'money': 1000 }}, false, true)
// var resultMessage = db.runCommand({ getLastErr: 1 });
// printjson(resultMessage);

// ====================14. findAndModify===============================
var myModify = {
  findAndModify: 'workMate',
  query: { 'name': 'wikiHong' }, // 查找条件
  update: { $set: {'age': 13}}, // 修改
  new: true // 返回修改后的值， false是返回修改前的值
};
var resultMessage = db.runCommand(myModify);
printjson(resultMessage) // 打印出json格式的数据