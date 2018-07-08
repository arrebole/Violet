const Router = require("koa-router");
const admin = require("./admin");
const home = require('./home');
const login = require("./login");
const articles = require("./articles");
const columm = require("./column");
const read = require("./read");


var router = new Router();

router
  .use("/v1/login", login.routes(), login.allowedMethods())
  .use("/v1/admin", admin.routes(), admin.allowedMethods)
  .use("/v1/views/home", home.routes(), home.allowedMethods())
  .use("/v1/views/articles", articles.routes(), home.allowedMethods())
  .use("/v1/views/articles/cv:id", columm.routes(), columm.allowedMethods())
  .use("/v1/views/articles/cv:id/page:page", read.routes(), read.allowedMethods());


module.exports = router;
