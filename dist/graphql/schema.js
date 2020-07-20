"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var query_1 = require("./schemas/query");
var studentType_1 = require("./schemas/studentType");
var courseType_1 = require("./schemas/courseType");
var mutations_1 = require("./schemas/mutations");
var instructorType_1 = require("./schemas/instructorType");
exports.typeDefs = [
    query_1.Query,
    studentType_1.StudentType,
    studentType_1.CreateStudentResponse,
    studentType_1.UpdateStudentResponse,
    studentType_1.DeleteStudentResponse,
    courseType_1.CourseType,
    courseType_1.CreateCourseResponse,
    courseType_1.UpdateCourseResponse,
    courseType_1.DeleteCourseResponse,
    courseType_1.EnrollCourseResponse,
    instructorType_1.InstructorType,
    instructorType_1.CreateInstructorResponse,
    instructorType_1.UpdateInstructorResponse,
    instructorType_1.DeleteInstructorResponse,
    mutations_1.mutations,
];
