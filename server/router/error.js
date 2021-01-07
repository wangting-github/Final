const Router = require('koa-router')
const router = new Router()

router.get('/', async ( ctx )=>{
  ctx.body = '404 error!'
})

module.exports = router