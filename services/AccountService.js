import BaseService from './BaseService'
import uuid from 'uuid/v4'
import md5 from 'md5'

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://45.78.21.205/mockdb');
// mongoose.connect('mongodb://127.0.0.1:27017/mockdb')
// 基本数据模型
const Account = require('../model/Account');

class AccountService extends BaseService {
  constructor() {
    super();
  }

  find() {}

  async create(model) {
    let nowTime = (new Date).getTime();
    let user = new Account({
      id: uuid(),
      nick: model.nick,
      pwd: md5(model.pwd),
      role: '1',
      createtime: nowTime,
      updatetime: nowTime,
    });
    let result = await user.save();
    return result;
  }
  check() {}
}

module.exports = new AccountService();
