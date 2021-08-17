const newRouters = require("./news");
const siteRouters = require("./site");
const coursesRouters = require("./courses");
const meRouters = require("./me");
// newRouters là cấp con nhỏ hơn của news
function route(app) {
  app.use("/me", meRouters);
  app.use("/news", newRouters);
  app.use("/courses", coursesRouters);
  app.use("/", siteRouters);
}
module.exports = route;
