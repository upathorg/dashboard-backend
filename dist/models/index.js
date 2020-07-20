"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var students_1 = require("./students");
var db_1 = __importDefault(require("./db"));
var courses_1 = require("./courses");
var studentCourses_1 = require("./studentCourses");
var student = new students_1.Student(db_1.default, 'students');
var course = new courses_1.Course(db_1.default, 'courses');
var studentCourse = new studentCourses_1.StudentCourse(db_1.default, 'students_courses');
var instructor = new studentCourses_1.StudentCourse(db_1.default, 'instructors');
var models = {
    student: student,
    course: course,
    studentCourse: studentCourse,
    instructor: instructor
};
exports.default = models;
