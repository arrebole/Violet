const Redis = require("ioredis");



const redisClient = new Redis({
  port: 6379,
  host: '127.0.0.1',
  family: 4,
});


module.exports = redisClient;
