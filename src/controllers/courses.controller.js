const Courses = require("../models/Courses");

const CoursesController = {
   async newCourse(req, res) {
      try {
         const { title, description, teacher } = req.body;
         let createCourse = await Courses.create({
            title,
            description,
            teacher,
         });
         res.json(createCourse);
      } catch (error) {
         console.log(error);
      }
   },
};

module.exports = CoursesController;