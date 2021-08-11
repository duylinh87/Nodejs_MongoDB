const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewController");
// vi New.. da duoc khoi tao thi ta dat ten biet thoai mai
router.get("/:slug", newsController.show);
router.get("/", newsController.index);

module.exports = router;
