const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteController copy");
// vi New.. da duoc khoi tao thi ta dat ten biet thoai mai
router.get("/:slug", siteController.search);
router.get("/", siteController.index);

module.exports = router;
