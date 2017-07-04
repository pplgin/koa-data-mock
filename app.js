const Koa = require('koa');
const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const views = require('koa-views');
const app = new Koa();
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')

const routeMap = require('./middlewares/routeMap')
let routesConfig = require('./routes/index')

app.keys = ['keys']
app.use(session())
app.use(bodyParser())

// koa-views default bind ctx.state
app.use(async (ctx,next)=>{
  ctx.state.session = ctx.session ? ctx.session : null;
  await next();
})

// set template and template dir
app.use(views(__dirname + '/views', {
  map: {
    html: 'swig',
    swig: 'swig'
  },
  extension: 'swig'
}));

app.use(routeMap(routesConfig))

// static source dir
app.use(serve(__dirname + '/static'))

app.use(async(ctx, next) => {
  let stime = new Date()
  await next()
  console.log(`link:${ctx.url} begin:${stime}`)
})

app.listen('3030', () => {
  console.log('server is running at http://0.0.0.0:3030')
})
