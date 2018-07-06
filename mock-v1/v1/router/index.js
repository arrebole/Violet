const Router = require("koa-router");
const home = require('./home');
const articles = require("./articles");
const columm = require("./column");
const read = require("./read");


var router = new Router();

router.get("/v1/views/home", home);
router.get("/v1/views/articles", articles);
router.get("/v1/views/articles/cv:id", columm);
router.get("/v1/views/articles/cv:id/page:page", read);
module.exports = router;
