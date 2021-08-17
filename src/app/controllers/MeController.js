const Course = require("../models/Course");
const {
  mutipleMongooseToObject,
  mutipleToObject,
} = require("../../until/mongoose");
class MeController {
  // [GET]/me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/stored-courses", {
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
  editCourses(req, res, next) {
    Course.findOne({
      _id: req.params._id,
    })
      .then((courses) =>
        res.render("me/edit-courses", {
          courses: mutipleToObject(courses),
        })
      )
      .catch(next);
  }
  updateCourses(req, res, next) {
    Course.updateOne(
      {
        _id: req.params._id,
      },
      req.body
    )
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // show(req, res, next) {
  //   Course.findOne({
  //     slug: req.params.slug,
  //   })
  //     .then((course) => {
  //       // res.json(course);
  //       res.render("courses/show", {
  //         course: mutipleToObject(course),
  //       });
  //     })
  //     .catch(next);
  // }
}
module.exports = new MeController();
