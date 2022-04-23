const Courses = require("../models/Courses");

const CoursesController = {
   async newCourse(req, res) {
      try {
         console.log(req.body);

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
};

module.exports = CoursesController;
