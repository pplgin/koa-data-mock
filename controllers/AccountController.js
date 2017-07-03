/**
 * 用户controller
 * @author  johnnyjiang
 * @email               johnnyjiang813@gmail.com
 * @createTime          2017-04-05T15:36:14+0800
 */

const AccountService = require('../services/AccountService.js');

class UserController {
  async login(ctx, tmpl) {
    await ctx.render(tmpl)
  }
  async postLogin(ctx, tmpl) {
    let params = ctx.request.body;
    try {
      let user = await AccountService.find(params);
      ctx.session.uuid = user.id
      ctx.state = {
        session: ctx.session
      };
      await ctx.render(tmpl)
    } catch (e) {
      await ctx.render(tmpl, {
        errMsg: e.message
      })
    }
  }

  async register(ctx, tmpl) {
    await ctx.render(tmpl)
  }

  async postRegister(ctx, tmpl) {
    let params = ctx.request.body;
    if (!params.nick || !params.pwd || !params.pwd1) {
      return await ctx.render(tmpl, {
        errMsg: '用户名或密码不能为空!'
      })
    } else if (params.pwd !== params.pwd1) {
      return await ctx.render(tmpl, {
        errMsg: '两次密码不一致!'
      })
    }

    try {
      let user = await AccountService.create(params);
      if (user && !user.error) {
        ctx.session.uuid = user.id
        ctx.state = {
          session: ctx.session
        };
        await ctx.render(tmpl)
      }
    } catch (e) {
      await ctx.render(tmpl, {
        errMsg: e.message
      })
    }
  }
  static factory() {
    return new UserController();
  }
}

module.exports = UserController.factory();