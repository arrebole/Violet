const Router = require("koa-router");
const router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = "hello";
})

router.post("/", async (ctx, next) => {
  ctx.body = "hello";
})


module.exports = router;
