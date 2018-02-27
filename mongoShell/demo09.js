var startTime = new Date().getTime();
var db = connect('company');
var rs = db.randomInfo.find({username: 'fj4ejd00o', runNum0: 445079});
rs.forEach(rs => {printjson(rs)});

var runTime = new Date().getTime() - startTime;
print('[demo]this is run time is'+runTime+'ms');
// 删除索引，里面放name值
db.randomInfo.dropIndex('randNum0_1')