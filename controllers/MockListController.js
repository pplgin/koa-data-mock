import { Authorize } from '../middlewares/authorize.js'
const MockService = require('../services/MockService.js')

/**
 * mock 历史数据
 * @author  johnnyjiang
 * @email               johnnyjiang813@gmail.com
 * @createTime          2017-03-30T15:37:45+0800
 */
class MockList {
  @Authorize
  async Index(ctx, tmpl){
    let listData = await MockService.list();
    await ctx.render(tmpl,{ list: listData })
  }
}


module.exports = new MockList();