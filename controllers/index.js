/**
 * @param      {[type]} scope                    [contenx 变量可以添加参数]
 * @author  johnnyjiang
 * @email                                        johnnyjiang813@gmail.com
 * @createTime          2017-03-20T14:16:02+0800
 */
const DBService = require('../services/DBService.js');
module.exports = (() => {
  return {
    index: async(ctx, tmpl) => {
      let json = {},_data = {}
      if (ctx.params.id) {
        let mockdata = DBService.mock.find(ctx.params.id);
        json = await mockdata
        _data = {
          'mocktmpl': json[0].mocktmpl || {},
          'mockdesc': json[0].mockdesc || '',
          'id': json[0].id || 0
        }
      }
      await ctx.render(tmpl,_data);
    },
    deleteMockById: async (ctx) => {
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
    },
    getMockById: async (ctx) => {
      let dataPro = DBService.mock.find(ctx.params.id);
      let mobj = await dataPro;
      mobj = mobj[0]
      if (mobj.id) {
        ctx.body = mobj.mockjson;
      } else {
        ctx.body = '未找到';
      }
    },
    postMock: async (ctx) => {
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
    }
  }
})()