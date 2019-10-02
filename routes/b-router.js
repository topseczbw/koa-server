const Router = require('koa-router')
const bData = require('../api/b')

const router = new Router()

router.get('/b', bData)

module.exports = router