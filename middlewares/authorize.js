// 必须登录
import WebConfig from '../config/web.config';

// 验证登录
export const Authorize = (target, key, descriptor) => {
  return {
    value: (ctx) => {
      if (!ctx.session.uuid) {
        return ctx.redirect(WebConfig.loginUrl)
      }
      return descriptor.value.call(target, scope, ctx);
    }
  }
}



// 用户角色
export const Roles = (_roles)=>{
  return (target, key,descriptor) =>{
  }
}
