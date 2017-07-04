// 必须登录
import { WebConfig } from '../config/web.config';

// 验证登录
export const Authorize = (target, key, descriptor) => {
  return {
    value: (ctx, tmpl) => {
      if (!ctx.session.user) {
        return ctx.redirect(`${WebConfig.AUTHORIZE}?url=${ctx.path}`)
      }
      return descriptor.value.call(target,ctx, tmpl);
    }
  }
}



// 用户角色
export const Roles = (_roles)=>{
  return (target, key,descriptor) =>{
  }
}
