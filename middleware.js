/**
 * 学习中间件执行顺序
 * 洋葱模型
 */

const Koa = require('koa')
const app = new Koa()

const middleware1 = function async (ctx, next) {
  console.log('这是中间件1')
  console.log(ctx.request.path)
  next()
  console.log('这是中间件1 edning')
}

const middleware2 = function async (ctx, next) {
  console.log('这是中间件2')
  console.log(ctx.request.path)
  next()
  console.log('这是中间件2 edning')
}

const middleware3 = function async (ctx, next) {
  console.log('这是中间件3')
  console.log(ctx.request.path)
  next()
  console.log('这是中间件3 edning')
}

app.use(middleware2)
app.use(middleware3)
app.use(middleware1)

app.listen(3400)