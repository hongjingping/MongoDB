var db = connect('company');
// var workMate1 = {
//   'name': 'wikiHong',
//   'age': 18,
//   'sex': 1,
//   'job': '前端',
//   'skill': {
//     'skill1': 'html+css',
//     'skill2': 'javascript',
//     'skill3': 'swimming'
//   },
//   'regardTime': new Date()
// }
// db.workMate.update({'name': 'wikiHong'}, workMate1);
// print('[update]: The Date was update successfuly');

// ===============1.$set修改器===================
// db.workMate.update({'name': 'wikiHong'}, {'$set': { 'sex': 2, age: 21}});
// print('[update]: The Date was update successfuly');


// ====================1.$set修改器修改内嵌的数据==========================
// db.workMate.update({'name': 'wikiHong'}, {'$set': {'skill.skill3': 'WORD'}});
// print('[update]: The Date was update successfuly');

// ====================1.$unset将部分数据删除==========================
// db.workMate.update({'name': 'wikiHong'}, {'$unset': {'age': ''}});

// ====================1.$set将部分数据恢复==========================
db.workMate.update({'name': 'wikiHong'}, {'$set': {'age': '16'}});

print('[update]: The Date was update successfuly');
