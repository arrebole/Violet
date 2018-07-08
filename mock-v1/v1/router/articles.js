/**
 * 对 url和 query 解析
 * 默认 query: limit = 3, offset = 0;如果请求的query正确,将替换默认;
 * 读取数据库,经过构造函数,响应json;
 * 
 */
const Router = require("koa-router");
const redisClient = require("../redis");
const router = new Router();

router.get("/",articles);

async function articles(ctx, next) {
  var query = ctx.request.query;
  var limit = 3;
  var offset = 0;

  // 参数判断 闸门 10;
  if (query.limit) {
    let temp = Number(query.limit);
    if (!isNaN(temp) && temp <= 10) {
      limit = temp;
    } else if (!isNaN(temp) && temp > 10) {
      limit = 10;
    }
    temp = null;
  }
  if (query.offset) {
    let temp = Number(query.offset);
    if (!isNaN(temp)) {
      offset = temp;
    }
    temp = null;
  }

  // 数据库处理

  // 数据库查询 cv列表
  var SQLQuery = [];
  SQLQuery = [
    ['zcard', 'articles'],
  ];
  redisClient.select(1);
  var caching1 = await redisClient.pipeline(SQLQuery).exec();
  var total = caching1[0][1];

  if (limit > total) {
    limit = total;
  }

  SQLQuery = [
    ['zrevrange', 'articles', offset, (offset + limit - 1)]
  ]
  var caching2 = await redisClient.pipeline(SQLQuery).exec();
  var list = caching2[0][1];

  // 根据 cv查详细
  SQLQuery = [];
  for (let i = 0; i < limit; i++) {
    SQLQuery.push(['hgetall', list[i]])
  };
  redisClient.select(2);
  var caching3 = await redisClient.pipeline(SQLQuery).exec();
  var data = [];
  for (let i = 0; i < SQLQuery.length; i++) {
    data.push(caching3[i][1])
  }

  // 响应结果
  // json 结构
  class structure {
    constructor(total, data) {
      // 计算剩余数量
      let num = total - limit - offset;
      this.info = {
        limit,
        offset,
        total,
        remain: num >= 0 ? num : 0
      }
      this.major = data;
    }
  }
  var res = new structure(total, data);


  ctx.response.type = 'json';
  ctx.response.body = JSON.stringify(res);

}

module.exports = router;
