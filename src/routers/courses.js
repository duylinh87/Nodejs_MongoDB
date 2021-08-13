const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/CourseController");
// vi New.. da duoc khoi tao thi ta dat ten biet thoai mai
router.get("/:slug", courseController.show);

module.exports = router;
