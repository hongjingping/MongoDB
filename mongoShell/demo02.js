var workMate1 = {
  'name': 'wikiHong',
  'age': 18,
  'sex': 2,
  'job': '前端',
  'skill': {
    'skill1': 'html+css',
    'skill2': 'javascript',
    'skill3': 'swimming'
  },
  'regardTime': new Date()
}
var workMate2 = {
  'name': 'MrFang',
  'age': 20,
  'sex': 1,
  'job': 'java后端',
  'skill': {
    'skill1': 'Java',
    'skill2': 'JavaEE',
    'skill3': 'PPT'
  },
  'regardTime': new Date()
}
var workMate3 = {
  'name': 'Ivan Jiao',
  'age': 25,
  'sex': 1,
  'job': '前端架构师',
  'skill': {
    'skill1': 'html+css',
    'skill2': 'javascript',
    'skill3': 'ps'
  },
  'regardTime': new Date()
}

var workMate4 = {
  'name': 'Ivan Jiao',
  'age': 25,
  'sex': 1,
  'job': '前端架构师22',
  'skill': {
    'skill1': 'html+css',
    'skill2': 'javascript',
    'skill3': 'ps'
  },
  'regardTime': new Date()
}

var workMate5 = {
  'name': 'Ivan Jiao',
  'age': 25,
  'sex': 1,
  'job': '前端架构师22',
  'skill': {
    'skill1': 'html+css',
    'skill2': 'javascript',
    'skill3': 'ps'
  },
  'regardTime': new Date()
}

var workMate6 = {
  'name': 'Ivan Jiao',
  'age': 25,
  'sex': 1,
  'job': '前端架构师22',
  'skill': {
    'skill1': 'html+css',
    'skill2': 'javascript',
    'skill3': 'ps'
  },
  'regardTime': new Date()
}

var workMate7 = {
  'name': 'Ivan Jiao',
  'age': 25,
  'sex': 1,
  'job': '前端架构师22',
  'skill': {
    'skill1': 'html+css',
    'skill2': 'javascript',
    'skill3': 'ps'
  },
  'regardTime': new Date()
}

var workMate8 = {
  'name': 'Ivan Jiao',
  'age': 25,
  'sex': 1,
  'job': '前端架构师22',
  'skill': {
    'skill1': 'html+css',
    'skill2': 'javascript',
    'skill3': 'ps'
  },
  'regardTime': new Date()
}

var workMate9 = {
  'name': 'Ivan Jiao',
  'age': 25,
  'sex': 1,
  'job': '前端架构师22',
  'skill': {
    'skill1': 'html+css',
    'skill2': 'javascript',
    'skill3': 'ps'
  },
  'regardTime': new Date()
}

var db = connect('company');
var workMateArray = [ workMate1, workMate2, workMate3 ];
db.workMate.insert(workMateArray);
print('[SUCCESS]: The date was inserted successfulload')