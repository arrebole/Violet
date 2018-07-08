const Router = require("koa-router");
const redisClient = require("../redis");
const router = new Router();

class callback {
  constructor() {}
}

router.get("/articles/all", async (ctx, next) => {

  var SQLQuiry = [
    ['zrevrange', 'articles', 0, -1]
  ];
  redisClient.select(1);
  var caching = await redisClient.pipeline(SQLQuiry).exec();
  var cv_id_list = caching[0][1];

  SQLQuery = [];
  for (let i = 0; i < cv_id_list.length; i++) {
    SQLQuery.push(['hgetall', cv_id_list[i]])

  };
  redisClient.select(2);
  var caching2 = await redisClient.pipeline(SQLQuery).exec();

  var cv_list = [];
  for (let i = 0; i < caching2.length; i++) {
    cv_list.push(caching2[i][1])
  }
  ctx.type = "json";
  ctx.body = JSON.stringify(cv_list);
})

router.post("/", async (ctx, next) => {
  ctx.body = "hello";
})


module.exports = router;
