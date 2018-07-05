const redisClient = require("../redis");

async function read(ctx, next) {
  var cv = 'cv' + ctx.params.id;
  var page = ctx.params.page;

  // 从表三获取 page对应名称
  var SQLQuery = [
    ['lindex', cv, page]
  ];
  redisClient.select(3);
  var caching1 = await redisClient.pipeline(SQLQuery).exec();
  var page_title = caching1[0][1];

  // 从表4获取 page 创建日期
  SQLQuery = [
    ['hget', cv, caching1[0][1]]
  ]
  redisClient.select(4);
  var caching2 = await redisClient.pipeline(SQLQuery).exec();
  var update = caching2[0][1];

  // 从表5获取 page 内容
  redisClient.select(5);
  var caching3 = await redisClient.pipeline(SQLQuery).exec();
  var text = caching3[0][1];


  // 获取 origin
  SQLQuery = [
    ['hget', cv, 'author'],
    ['hget', cv, 'title']
  ]
  redisClient.select(2);
  var caching4 = await redisClient.pipeline(SQLQuery).exec();
  var author = caching4[0][1];
  var origin = caching4[1][1];


  var info = {
    page_title,
    author,
    update,
    origin
  }

  class structure {
    constructor(info, text) {
      this.info = info;
      this.major = {
        text: text
      };
    }
  }

  ctx.type = 'json';
  ctx.body = JSON.stringify(new structure(info, text))
}


module.exports = read;
