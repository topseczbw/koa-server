// 合并routers
const combineRouters = require('koa-combine-routers')
const aRouter = require('./a-router')
const bRouter = require('./b-router')


module.exports = combineRouters(
  aRouter,
  bRouter
)