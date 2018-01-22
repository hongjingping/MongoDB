// =============13. db.runCommand() ===================
db.workMate.update({'sex': 1}, {$set: { 'money': 1000 }}, false, true)
var resultMessage = db.runCommand({ getLastErr: 1 });
printjson(resultMessage);