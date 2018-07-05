/**
 * nodejs 后端
 * 
 */
const Koa = require("koa");
const router = require("./router");

var app = new Koa();


// log
console.log("nodejs service is running http://localhost:3000");


app
   .use(async (ctx,next)=>{
       ctx.set("Access-Control-Allow-Origin","*")
       await next();
   })
   .use(router.routes())
   .use(router.allowedMethods())
   .listen(3000);