const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewController");
// vi New.. da duoc khoi tao thi ta dat ten biet thoai mai
router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
