const newRouters = require("./news");
const siteRouters = require("./site");

// newRouters là cấp con nhỏ hơn của news
function route(app) {
  app.use("/news", newRouters);
  app.use("/", siteRouters);
}
module.exports = route;
