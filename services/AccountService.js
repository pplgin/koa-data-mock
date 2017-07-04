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

  async find(model) {
    let member = await Account.findOne({
      nick: model.nick,
      pwd: md5(model.pwd)
    }).exec()
    if(!member){
      throw new Error('用户名或密码错误！')
    }
    return member;
  }

  async create(model) {
    let nowTime = (new Date).getTime();

    let member = await Account.findOne({
      nick: model.nick
    }).exec()

    if(member){
      throw new Error('用户名已经存在！')
    }

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

  async edit(model){
    let nowTime = (new Date).getTime();
    let result = await Account.update({id: model.id}, {
      nick: model.nick,
      pwd: md5(model.pwd),
      role: model.role || '1',
      updatetime: nowTime,
    });
    return result;
  }
}

module.exports = new AccountService();
