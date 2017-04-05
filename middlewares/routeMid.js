const Router = require('koa-router');
const views = require('koa-views');
const path = require('path');

let router = new Router();

const routeConfig = require('./../routes');

// 初始化路由配置
routeConfig.forEach((rItem)=>{
  let _method = !rItem.method ? 'get' : rItem.method.toLowerCase()
  router[_method](rItem.url,async (ctx,next)=>{
    // controller 容错 to do
    let _control = getControlMethod(rItem.controller)
    await _control(ctx,rItem.template);
  });
});


/**
 * [getControlMethod 获取controller方法]
 * @param      {[type]} _path                    [description]
 * @return     {[func]}                          [description]
 * @author  johnnyjiang
 * @email               johnnyjiang813@gmail.com
 * @createTime          2017-04-05T16:13:06+0800
 */
function getControlMethod(_path){
  // controller 路径情况 xxx/xxx/xxx/xxx|method
  let controllerInfo = _path.split('::');
  if(!controllerInfo.length){
    throw new Error("the controller must be passed!");
  }
  let _control = require(path.join(__dirname,`../controllers/${controllerInfo[0]}`));
  if(controllerInfo.length>2){
    throw new Error("the controller can only contain one method!")
  }
  // 指定对应的方法
  return !controllerInfo[1] ? _control['index'] : _control[controllerInfo[1]]
}



module.exports = router;