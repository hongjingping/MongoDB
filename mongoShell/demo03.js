var db = connect('company');
db.workMate.update({'name': 'wikiHong'}, {'sex': 0});
print('[update]: The Date was update successfuly');