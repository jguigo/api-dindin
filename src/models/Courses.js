const db = require("../database");
const { DataTypes } = require("sequelize");

const Courses = db.define(
   "Courses",
   {
      course_id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      title: {
         type: DataTypes.STRING,
      },
      description: {
         type: DataTypes.STRING,
      },
      teacher: {
         type: DataTypes.STRING,
      },
   },
   {
      tableName: "courses",
      timestamps: false,
   }
);

module.exports = Courses;
