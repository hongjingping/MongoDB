db.info.insert({contextInfo:"I am a programmer, I love life, love family. Every day after work, I write a diary."})
db.info.insert({contextInfo:"I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink."})

// 建立全文索引
// db.info.ensureIndex({contextInfo: 'text'})

// 查找全文索引
db.info.find({$text:{$search: 'programmer family diray drink'}})

// 同时查找两个
db.info.find({$text:{$search: "\"love PlayGame\"drink"}})