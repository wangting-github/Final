
const dev=require('./webpack/webpack.dev')
const prod=require('./webpack/webpack.prod')
const TARGET=process.env.npm_lifecycle_event
if(TARGET==='dev' ||  TARGET==='start_static'){
 module.exports=dev
}
if(TARGET === 'prod'){
  module.exports=prod
}

if(TARGET === 'build'){
  module.exports=prod
}