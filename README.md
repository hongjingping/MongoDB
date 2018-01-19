# MongoDB
MongoDB

## Mac下面安装MongoDB
0. 可以参考： https://www.imooc.com/article/22733
1. Mac 下安装 MongoDB 一般有两种方法，一种是通过源码安装，一种是直接使用 homebrew ，如果自带的有homebrew推荐使用 homebrew进行安装。
2. 安装 homebrew ：`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
3. 使用 homebrew 安装 MongoDB ：
`brew install mongodb`
4. `echo $PATH`查看环境变量
5. `vi /etc/paths` 就可以看到目录
6. 前往文件夹`/usr/local/etc/mongod.conf`
7. 打开终端，启动mongo`mongod —config /usr/local/etc/mongod.conf`
8. 输入`brew services start mongodb`
9. `mongo`
10. 查看存在数据库命令`show dbs`，
11. 查看数据库版本命令: `db.version()`
12. dangdangdang---测试一下是否成功~~







## 认识和安装MongoDB
###### 非关系数据库和关系型数据库的区别是什么？
  1. 实质：非关系型数据库的实质：非关系型数据库产品是传统关系型数据库的功能阉割版，通过减少用不到或很少用的功能，来大幅度提高产品性能。
  2. 价格：目前的非关系型数据库基本都是免费的，而比较有名气的关系型数据库都是收费的，比如：Oracle、DB2、MSSQL。MySql虽然是免费的，但是处理大型数据还是要提前作很多工作的。
  3. 功能：实际开发中，很多业务需求，其实并不需要完整的关系型数据库功能，非关系型数据库的功能就足够使用了。这种情况下，使用性能更高、成本更低的非关系型数据库当然是更明智的选择。
###### MongoDB简介：
  1. MongoDB是一个基于分布式文件存储的数据库，由C++语言编写。目的是为WEB应用提供扩展的高性能的数据存储解决方案。MongoDB是一个介于关系型数据库和非关系型数据库之间的产品，是非关系型数据库当中功能最丰富，最像关系数据库的。他支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。
