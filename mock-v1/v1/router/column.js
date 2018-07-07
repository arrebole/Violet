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
  var major = [];
  for (let i = 0; i < caching[0][1].length; i++) {
    let item = {}
    item['P' + String(i)] = caching[0][1][i];
    major.push(item)
  }
  // info
  var info = {};
  redisClient.select(2);
  SQLQuery = [
    ['hgetall', cv]
  ];
  var catching2 = await redisClient.pipeline(SQLQuery).exec();
  info = catching2[0][1];

  class structure {
    constructor(info, major) {
      this.info = info
      this.major = major
    }
  }

  ctx.type = 'json';
  ctx.body = JSON.stringify(new structure(info, major));
}


module.exports = router;
