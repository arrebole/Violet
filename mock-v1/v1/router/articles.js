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
  var all = [];
  for (let i = 0; i < SQLQuery.length; i++) {
    all.push(caching3[i][1])
  }

  var data =[];
  all.forEach((item, index)=>{
    var one = {};
    one.cv_id = item.cv_id;
    one.cover = item.cover;
    one.title = item.title;
    one.topic = item.topic;
    data.push(one);
  })
  // 响应结果
  // json 结构
  class structure {
    constructor(data) {
      // 计算剩余数量
      let ifRemain = total - limit - offset;
      this.code = 0;
      this.remain = (ifRemain >= 0) ? ifRemain : 0;
      this.date = data;
    }
  }
  var res = new structure(data);


  ctx.response.type = 'json';
  ctx.response.body = JSON.stringify(res);

}

module.exports = router;
