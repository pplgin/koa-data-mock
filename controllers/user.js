/**
 * 用户controller
 * @author  johnnyjiang
 * @email               johnnyjiang813@gmail.com
 * @createTime          2017-04-05T15:36:14+0800
 */
module.exports = (() => {
  return {
    index: async (ctx, tmpl) => {
      await ctx.render(tmpl)
    },
    PostReg: async (ctx, tmpl) => {},
    PostLogin: async (ctx, tmpl) => {
      await ctx.render(tmpl)
    }
  }
})();