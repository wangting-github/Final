const Koa = require('koa')
const app = new Koa()
const mime = require('mime-types')
const router = require('./router/index')
const views = require('koa-views')
const path = require('path')
const static = require('koa-static')

//静态资源加载中间件
app.use(static(
  path.join( __dirname,  './../static/src')
))

//初始化模版引擎
app.use(views(path.join(__dirname,'./view'),{extension:'ejs'}))

//初始化路由中间件
app.use(router.routes())

app.use(async ctx => {

  // console.log(1);
  // ctx.response.body='123'
  // console.log(ctx.request.url);
  
  // //ctx.body = 'Hello';
  // var jsonType = mime.lookup('json');
  // ctx.response.set("content-type", jsonType);
  // var json = {text: "Hello, World!"};
  // ctx.response.body =  JSON.stringify(json);
});

app.listen(3000);

