/**
 * @file 应用主模块
 */

const Koa = require('koa')
const Router = require('koa-router')
const fs = require('fs')
const path = require('path')

const app = new Koa()
const router = new Router()

// 返回根目录的index.html页面
// app.use(async ctx => {
//     const indexPath = path.join(__dirname, '../dist/index.html')
//     const indexContent = fs.readFileSync(indexPath, 'binary')
//     ctx.body = indexContent
// })

router.post('/string', (ctx, next) => {
    ctx.status = 200;
    ctx.body = 'hello world';
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000)
