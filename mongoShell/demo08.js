var startTime = new Date().getTime();
var db = connect('company');
var result = db.randomInfo.find({username: 'tgn4a8c87'});
result.forEach(result => {printjson(result)})

var runTime = new Date().getTime() - startTime;
print('[demo] this run time is' + runTime + 'ms')

// 建立索引, 1代表true
// db.randomInfo.ensureIndex({username:1})