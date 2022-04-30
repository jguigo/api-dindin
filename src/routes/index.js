const express = require("express");
const CoursesController = require("../controllers/courses.controller");
const routes = express.Router();

routes.get("/cursos", CoursesController.listCourses);
routes.post("/cursos", CoursesController.newCourse);
routes.delete("/cursos/:id", CoursesController.deleteCourse);

module.exports = routes;
