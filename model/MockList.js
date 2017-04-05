// 基本数据模型
const mongoose = require('mongoose');

// 数据模型结构
const MockListSchema = mongoose.Schema({
  id: String,
  url: String,
  mockdesc: String,
  mocktmpl: Object,
  mockjson: Object,
  createtime: Date,
  updatetime: Date,
  author: String
});

const Mocklist = mongoose.model('mocklist', MockListSchema);

module.exports = Mocklist;

