var userName = 'wikiHong'; //声明一个登录名  
var timeStamp = Date.parse(new Date()); //声明登录时的时间戳 
var jsonDatabase = {'loginName': userName, 'loginTime': timeStamp}; //组成JSON字符串
var db = connect('log'); //链接数据库
db.login.insert(jsonDatabase); //插入数据
print('[goTask] log print success'); //没有错误显示成功