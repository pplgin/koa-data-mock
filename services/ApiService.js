const Router = require('koa-router');
let router = new Router();

// 保存接口
router.post('/mock/save/', async(ctx, next) => {
  let _params = ctx.request.body;
  let moc = mockFun(eval('(' + _params.mokjson + ')'));
  let _id = Math.random().toString(36).slice(2);
  let id = _params.id || _id;
  if (_params.id) {
    // 荣错处理 to do
    DBService.mock.update(_params.id, {
      mockdesc: _params.mockdesc,
      mocktmpl: _params.mokjson,
      mockjson: moc
    })
  } else {
    // 荣错处理 to do
    DBService.mock.save({
      id: _id,
      mockdesc: _params.mockdesc,
      mocktmpl: _params.mokjson,
      mockjson: moc
    });
  }
  ctx.body = {
    id: id,
    url: `http://0.0.0.0:3030/mock/${id}`
  };
});

// 获取mock数据
router.get('/mock/:id/', async(ctx, next) => {
  let dataPro = DBService.mock.find(ctx.params.id);
  let mobj = await dataPro;
  mobj = mobj[0]
  if (mobj.id) {
    ctx.body = mobj.mockjson;
  } else {
    ctx.body = '未找到';
  }
});

// 删除数据
router.delete('/mock/:id/', async(ctx, next) => {
  let dataResult = DBService.mock.remove(ctx.params.id);
  let deleteRes = await dataResult;
  if (deleteRes.result.ok) {
    ctx.body = {
      status: 1
    };
  } else {
    ctx.body = {
      status: 0,
      message: '删除数据出错！'
    };
  }
});