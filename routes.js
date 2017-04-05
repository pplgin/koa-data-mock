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
  controller: 'index::getMockById',
  method: 'post'
}, {
  url: '/mockedit/:id/',
  controller: 'index',
  template: 'home'
}, {
  url: '/mocklist',
  controller: 'mocklist',
  template: 'mocklist'
}, {
  url: '/api/login',
  controller: 'user::PostLogin',
  method: 'post'
}, {
  url: '/api/reg',
  controller: 'user::PostReg',
  method: 'post'
}];