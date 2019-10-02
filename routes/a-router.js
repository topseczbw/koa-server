const Router = require('koa-router')
const aData = require('../api/a')

const router = new Router()

router.get('/a', aData)

module.exports = router