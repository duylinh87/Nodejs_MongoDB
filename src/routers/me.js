const express = require("express");
const router = express.Router();
const meController = require("../app/controllers/MeController");
// vi New.. da duoc khoi tao thi ta dat ten biet thoai mai
router.get("/stored/courses", meController.storedCourses);
router.get("/stored/courses/edit/:_id", meController.editCourses);
router.post("/stored/courses/:_id", meController.updateCourses);
router.post("/stored/courses/delete/:_id", meController.deleteCourses);
module.exports = router;
