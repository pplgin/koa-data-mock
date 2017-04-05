const DBService = require('../services/DBService.js');
/**
 * mock 历史数据
 * @author  johnnyjiang
 * @email               johnnyjiang813@gmail.com
 * @createTime          2017-03-30T15:37:45+0800
 */
module.exports = (()=>{
  return {
    index: async (ctx, tmpl)=>{
      let listData = DBService.mock.list();
      let res = await listData;
      await ctx.render(tmpl,{ list: res })
    }
  }
})();