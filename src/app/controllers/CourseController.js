const Course = require("../models/Course");
const {
  mutipleMongooseToObject,
  mutipleToObject,
} = require("../../until/mongoose");
class CourseController {
  // [GET]/news

  show(req, res, next) {
    Course.findOne({
      slug: req.params.slug,
    })
      .then((course) => {
        // res.json(course);
        res.render("courses/show", {
          course: mutipleToObject(course),
        });
      })
      .catch(next);
  }
}
module.exports = new CourseController();

/// chú ý hamgf findOne là 1 promise lên để hứng kết quả ta sử
// dụng then(function callback).catch(bắt lỗi)
