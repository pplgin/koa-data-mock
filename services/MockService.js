// const mongoose = require('mongoose');
// mongoose.connect('mongodb://45.78.21.205/mockdb');
// mongoose.connect('mongodb://127.0.0.1:27017/mockdb')
// 基本数据模型
const Mocklist = require('../model/MockList');
const Account = require('../model/Account');



class MockService {
  async list() {
    return Mocklist.where('author','admin').exec();
  }

  async find(_id) {
      return Mocklist.find({
        id: _id
      }).exec()
    }
    // 更新数据库
  async update(_id, _data) {
    let query = {
      id: _id
    };
    _data.updatetime = (new Date()).getTime();
    return Mocklist.findOneAndUpdate(query, _data),exec();
  }

    // 保存数据
  async save(_data) {
    _data.createtime = (new Date()).getTime();
    _data.author = 'admin';
    let mock = new Mocklist(_data);
    return mock.save((err, mcok) => {
      if (err) return console.error(err);
      console.log(mcok)
    });
  }
    // 移除数据
  async remove(_id){
    return Mocklist.deleteOne({
      id: _id
    })
  }
}
module.exports = new MockService();