
const Router = require("koa-router");
const redisClient = require("../redis");
const router = new Router();

router.get("/",home);

async function home(){

}

module.exports = router;