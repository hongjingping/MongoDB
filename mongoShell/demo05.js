//查找之只显示名字和技能
// db.workMate.find(
//   {'skill.skill1': 'html+css'},
//   {'name': true , 'skill.skill1': true, _id: false }, 
// )

// 查找
// db.workmate.find(
//     {age:{$lte:30,$gte:25}},
//     {name:true,age:true,"skill.skill1":true,_id:false}
// )

// var startDate = new Date('01/01/2018');
// db.workMate.find(
//   {'regardTime': {$gt: startDate}},
//   { 'name': 1, 'skill.skill1': 1, 'age': 1, _id: 0}
// )

// ============1. $in修饰符，一个key多个value的查询==================
// db.workMate.find({'age': {$in: [25,33]}},
//   { 'name': 1, 'skill.skill1': 1, 'age': 1, _id: 0}
// )

// ===============2. $nin不包括================================
// db.workMate.find({'age': {$nin: [25,33]}},
//   { 'name': 1, 'skill.skill1': 1, 'age': 1, _id: 0}
// )

// $or修饰符
db.workMate.find(
  { $or: [
    { 'age': {$gte: 30}},
    { 'skill.skill3': 'ps'}
  ]},
  { 'name': 1, 'skill.skill1': 1, 'age': 1, _id: 0}
)