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
  create(req, res, next) {
    res.render("courses/create");
  }
  store(req, res, next) {
    // res.json(req.body); // dya la phan yeu cau duoc gui len sever
    const formData = req.body;
    formData.img = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const course = new Course(formData);
    course.save().then(() => res.redirect("/"));
    /// phuong thuc course.save() trong moogoose tra ve 1 promise vi the dung then de dieu huong ve trang chu
    // phuong thuc dieu huong xem o express
  }
}
module.exports = new CourseController();

/// chú ý hamgf findOne là 1 promise lên để hứng kết quả ta sử
// dụng then(function callback).catch(bắt lỗi)
