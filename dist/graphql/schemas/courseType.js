"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollCourseResponse = exports.DeleteCourseResponse = exports.UpdateCourseResponse = exports.CreateCourseResponse = exports.CourseType = void 0;
var apollo_server_express_1 = require("apollo-server-express");
// Course table schema and responses
exports.CourseType = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Course {\n    id: ID!\n    title: String\n    description: String\n    ratings: Float\n    instructor_id: Int\n    students: [Student]\n  }\n"], ["\n  type Course {\n    id: ID!\n    title: String\n    description: String\n    ratings: Float\n    instructor_id: Int\n    students: [Student]\n  }\n"])));
exports.CreateCourseResponse = apollo_server_express_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  type CreateCourseResponse {\n    success: Boolean!\n    message: String!\n    course: Course!\n  }\n"], ["\n  type CreateCourseResponse {\n    success: Boolean!\n    message: String!\n    course: Course!\n  }\n"])));
exports.UpdateCourseResponse = apollo_server_express_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  type UpdateCourseResponse {\n    success: Boolean!\n    message: String!\n    course: Course\n  }\n"], ["\n  type UpdateCourseResponse {\n    success: Boolean!\n    message: String!\n    course: Course\n  }\n"])));
exports.DeleteCourseResponse = apollo_server_express_1.gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  type DeleteCourseResponse {\n    success: Boolean!\n    message: String!\n    course: Course\n  }\n"], ["\n  type DeleteCourseResponse {\n    success: Boolean!\n    message: String!\n    course: Course\n  }\n"])));
exports.EnrollCourseResponse = apollo_server_express_1.gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  type EnrollCourseResponse {\n    success: Boolean!\n    message: String!\n  }\n"], ["\n  type EnrollCourseResponse {\n    success: Boolean!\n    message: String!\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
