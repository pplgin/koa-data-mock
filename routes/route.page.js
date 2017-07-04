/**
 * [exports 路由模板]
 * @type {Array}
 */
export default [{
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
  controller: 'MockListController::Index',
  template: 'mocklist'
}, {
  url: '/help',
  controller: 'index::help',
  template: 'help'
}, {
  url: '/account/login',
  controller: 'AccountController::login',
  template: 'account/login'
}, {
  url: '/account/login',
  controller: 'AccountController::postLogin',
  method: 'post',
  template: 'account/login'
}, {
  url: '/account/loginout',
  controller: 'AccountController::loginOut',
}, {
  url: '/account/register',
  controller: 'AccountController::register',
  template: 'account/register'
}, {
  url: '/account/register',
  controller: 'AccountController::postRegister',
  method: 'post',
  template: 'account/register'
}];