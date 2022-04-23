const Courses = require("../models/Courses");

const CoursesController = {
   async listCourses(req, res) {
      try {
         const courses = await Courses.findAll();

         res.status(200).json(courses);
      } catch (error) {
         console.log(error);
      }
   },

   async newCourse(req, res) {
      try {
         const { title, description, teacher } = req.body;

         if (!title || !description || !teacher) {
            return res.status(400).json({
               error: "Você precisa passar os atributos corretamente",
            });
         }
         let createCourse = await Courses.create({
            title,
            description,
            teacher,
         });
         res.status(201).json(createCourse);
      } catch (error) {
         console.log(error);
      }
   },

   async deleteCourse(req, res) {
      const { id } = req.params;

      await Courses.destroy({
         where: { course_id: id },
      });
      res.status(204).json("Curso deletado!");
   },
};

module.exports = CoursesController;
