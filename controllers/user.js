/**
 * 用户controller
 * @author  johnnyjiang
 * @email               johnnyjiang813@gmail.com
 * @createTime          2017-04-05T15:36:14+0800
 */

const AccountService = require('../services/AccountService.js');

module.exports = (() => {
  return {
    index: async (ctx, tmpl) => {
      console.log(ctx.session)
      await ctx.render(tmpl)
    },
    PostReg: async (ctx, tmpl) => {
      let params = ctx.request.body;
      let user = await AccountService.create(params);

      if(user && !user.error) {
        ctx.session.uuid = user.id
        ctx.redirect('/account/')
      }
      ctx.redirect('/account/')
    },
    PostLogin: async (ctx, tmpl) => {
      await ctx.render(tmpl)
    }
  }
})();