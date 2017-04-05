const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mockdb');

// 基本数据模型
const Mocklist = require('../model/MockList');


const DBService = (() => {
  return {
    mock: {
      list: () => {
        return Mocklist.find().exec();
      },
      // 按照Id 查询内容
      find: (_id) => {
        return Mocklist.find({
          id: _id
        }).exec()
      },
      // 更新数据库
      update: (_id, _data) => {
        let query = {
          id: _id
        };
        _data.updatetime = (new Date()).getTime();
        Mocklist.findOneAndUpdate(query, _data, (err) => {
          if (err) return console.error(err);
        })
      },
      // 保存数据
      save: (_data) => {
        _data.createtime = (new Date()).getTime();
        _data.author = 'admin';
        let mock = new Mocklist(_data);
        mock.save((err, mcok) => {
          if (err) return console.error(err);
          console.log(mcok)
        });
      },
      // 移除数据
      remove: (_id) => {
        return Mocklist.deleteOne({
          id: _id
        })
      }
    },
    user:{
      login:()=>{
      },
      reg:()=>{
      }
    }
  }
})();
module.exports = DBService