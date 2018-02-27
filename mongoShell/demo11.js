// 创建用户
db.createUser({
  user: 'wikiHong',
  pwd: '123456',
  customData: {
    name: 'wikiHong',
    email: '1249716331@qq.com',
    age: 18
  },
  roles: [
    {
      role: 'readWrite',
      db: 'company'
    }, 
    'read'
  ]
})
db.system.users.remove({user: 'wikiHong'})
db.auth('wikiHong','123456')