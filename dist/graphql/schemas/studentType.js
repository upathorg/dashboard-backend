"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStudentResponse = exports.UpdateStudentResponse = exports.CreateStudentResponse = exports.StudentType = void 0;
var apollo_server_express_1 = require("apollo-server-express");
// Student table schema and responses
exports.StudentType = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        \n        type Student {\n        id: ID!\n        firstName: String\n        lastName: String\n        email: String\n        username: String\n        courses: [Course]\n        }\n    "], ["\n        \n        type Student {\n        id: ID!\n        firstName: String\n        lastName: String\n        email: String\n        username: String\n        courses: [Course]\n        }\n    "])));
exports.CreateStudentResponse = apollo_server_express_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        type CreateStudentResponse {\n        success: Boolean!\n        message: String!\n        student: Student\n    }\n    "], ["\n        type CreateStudentResponse {\n        success: Boolean!\n        message: String!\n        student: Student\n    }\n    "])));
exports.UpdateStudentResponse = apollo_server_express_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        type UpdateStudentResponse {\n        success: Boolean!\n        message: String!\n        student: Student\n        }\n    "], ["\n        type UpdateStudentResponse {\n        success: Boolean!\n        message: String!\n        student: Student\n        }\n    "])));
exports.DeleteStudentResponse = apollo_server_express_1.gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        type DeleteStudentResponse {\n        success: Boolean!\n        message: String!\n        student: Student\n    }\n    "], ["\n        type DeleteStudentResponse {\n        success: Boolean!\n        message: String!\n        student: Student\n    }\n    "])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
