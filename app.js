const Koa = require('koa');
const views = require('koa-views');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const DBService = require('./services/DBService.js');


app.use(bodyParser())

// 加载路由配置
const router = require('./middlewares/routeMid');

// set template and template dir
app.use(views(__dirname + '/views', {
  map: {
    html: 'swig',
    swig: 'swig'
  },
  extension: 'swig'
}));

// static source dir
app.use(serve(__dirname + '/static'))

app.use(async(ctx, next) => {
  let stime = new Date();
  await next();
  console.log(`link:${ctx.url} begin:${stime}`)
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen('3030', () => {
  console.log('server is running at http://0.0.0.0:3030')
})