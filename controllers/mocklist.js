import { Authorize } from '../middlewares/Authorize'
const DBService = require('../services/DBService.js')

/**
 * mock 历史数据
 * @author  johnnyjiang
 * @email               johnnyjiang813@gmail.com
 * @createTime          2017-03-30T15:37:45+0800
 */
class MockList {
  @Authorize
  async index(ctx, tmpl){
    let listData = await DBService.mock.list();
    await ctx.render(tmpl,{ list: listData })
  }
}


module.exports = new MockList();