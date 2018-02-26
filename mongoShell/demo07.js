// 制作随机数生成
function getRandomNum(min, max){
  let range = max - min;
  let rand = Math.random();
  return (min + Math.round(rand * range));
}
// console.log(getRandomNum(10000, 99999));

// 生产随机用户名
function getRandomUsername(min, max){
  let tempStringArray = '1234567890qwertyuiopasdfghjklzxcvbnm'.split('');
  let outputText = '';
  for ( let i = 1; i < getRandomNum(min, max); i++){
    outputText = outputText + tempStringArray[getRandomNum(0, tempStringArray.length) ]
  }
  return outputText;
}
// console.log(getRandomUsername(7, 16));

// 插入200万条数据
var startTime = (new Date()).getTime();
var db = connect('company');
db.randomInfo.drop();
var tempInfo = [];
for(let i=0;i<2000000;i++){
  tempInfo.push({
    username: getRandomUsername(7,16),
    regeditTime: new Date(),
    randNum0: getRandomNum(10000, 999999),
    randNum1: getRandomNum(10000, 999999),
    randNum2: getRandomNum(10000, 999999),
    randNum3: getRandomNum(10000, 999999),
    randNum4: getRandomNum(10000, 999999),
    randNum5: getRandomNum(10000, 999999),
    randNum6: getRandomNum(10000, 999999),
    randNum7: getRandomNum(10000, 999999),
    randNum8: getRandomNum(10000, 999999),
    randNum9: getRandomNum(10000, 999999),
  })
}
// 批量插入
db.randomInfo.insert(tempInfo);
var endTime = (new Date()).getTime() - startTime;
print('[demo]:..........'+ endTime + 'ms');