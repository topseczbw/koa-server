const Koa = require('koa')
const path = require('path')
// 路由
const Router = require('koa-router')
// 解析
const koaBody = require('koa-body')
// 跨域
const cors = require('@koa/cors')
// 在页面上显示时，美化响应数据为json
const koaJosn = require('koa-json')
// 加入一些安全头，让应用在默认情况下更加安全
const koaHelmet = require('koa-helmet')
// 静态文件
const koaStatic = require('koa-static')
// 拆分router，优化文件目录，优化入口文件
// const koaRouters = require('./routes/index')

const app = new Koa()
const router = new Router()


router.prefix('/api')

router.get('/', ctx => {
  ctx.body = 'hello world'
})

router.get('/api', ctx => {
  ctx.body = 'api'
})

router.get('/getData', ctx => {
  const params = ctx.request.query
  console.log(params)
  console.log(params.name)
  console.log(params.age)
  ctx.body = {
    name: params.name
  }
})

router.get('/async', async ctx => {
  let result = await new Promise((resolve, reject) => {
    // 模拟查询数据库消耗两秒的时间
    setTimeout(() => {
      resolve('async')
    }, 2000)
  })
  ctx.body = result
})

router.post('/post', async (ctx) => {
  let { body } = ctx.request
  ctx.body = {
    ...body
  }
})

app.use(koaBody())
app.use(cors())
app.use(koaHelmet())
// http://localhost:3000/logo.jpg 就可以访问到静态资源
// 指定静态文件夹
app.use(koaStatic(path.join(__dirname, './public')))
app.use(koaJosn())
app
  .use(router.routes())
  // 拦截应用中没有的请求，返回4xx
  .use(router.allowedMethods())


// 使用优化后的router
// app.use(koaRouters())

app.listen(3000)