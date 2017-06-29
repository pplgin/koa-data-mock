/**
 * [exports 路由模板]
 * @type {Array}
 */
module.exports = [{
  url: '/',
  controller: 'index',
  template: 'home'
}, {
  url: '/mock/save/',
  controller: 'index::postMock',
  method: 'post'
}, {
  url: '/mock/:id/',
  controller: 'index::getMockById',
  method: 'get'
}, {
  url: '/mock/:id/',
  controller: 'index::deleteMockById',
  method: 'delete'
}, {
  url: '/mockedit/:id/',
  controller: 'index',
  template: 'home'
}, {
  url: '/mocklist',
  controller: 'mocklist',
  template: 'mocklist'
},{
  url: '/help',
  controller: 'index::help',
  template: 'help'
},{
  url: '/account',
  controller: 'user::index',
  template: 'account'
},{
  url: '/api/reg',
  method: 'post',
  controller: 'user::PostReg',
  template: 'account'
}];