/**
 * 
 * 
 */


const Router = require("koa-router");
const redisClient = require("../redis");
const router = new Router();

router.get("/",column);

//router.get("/v1/views/articles/cv:id", columm);
async function column(ctx, next) {
  var cv = 'cv' + ctx.params.id;
  var SQLQuery = [
    ['lrange', cv, 0, -1]
  ];
  redisClient.select(3);
  var caching = await redisClient.pipeline(SQLQuery).exec();
  // list
  var dir = [];
  for (let i = 0; i < caching[0][1].length; i++) {
    let item = {}
    item['P' + String(i)] = caching[0][1][i];
    dir.push(item)
  }
  

  // date
  redisClient.select(2);
  SQLQuery = [
    ['hgetall', cv]
  ];
  var catching2 = await redisClient.pipeline(SQLQuery).exec();
  var date = catching2[0][1];
  date.dir = dir;

  class structure {
    constructor(date) {
      this.code = 0;
      this.date = date;
    }
  }

  ctx.type = 'json';
  ctx.body = JSON.stringify(new structure(date));
}


module.exports = router;
