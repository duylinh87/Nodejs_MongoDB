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
  // [PUT]/me/stored/courses/edit/:id
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
  // [PUT]/me/stored/courses/update/:id
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
  // [PUT]/me/stored/courses/delete/:id
  deleteCourses(req, res, next) {
    Course.deleteOne(
      {
        _id: req.params._id,
      },
      req.body
    )
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
}
module.exports = new MeController();
