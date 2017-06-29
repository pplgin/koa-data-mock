// 基本数据模型
const mongoose = require('mongoose');

// 数据模型结构
const AccountSchema = mongoose.Schema({
  id: String,
  nick: String,
  pwd: String,
  createtime: Date,
  updatetime: Date,
  role: String
});

const Account = mongoose.model('user', AccountSchema);

module.exports = Account;

