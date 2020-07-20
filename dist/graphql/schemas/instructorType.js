"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInstructorResponse = exports.UpdateInstructorResponse = exports.CreateInstructorResponse = exports.InstructorType = void 0;
var apollo_server_express_1 = require("apollo-server-express");
// Instructor table schema and responses
exports.InstructorType = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        type Instructor {\n        id: ID!\n        firstName: String\n        lastName: String\n        email: String\n        username: String\n        courses: [Course]\n        }\n    "], ["\n        type Instructor {\n        id: ID!\n        firstName: String\n        lastName: String\n        email: String\n        username: String\n        courses: [Course]\n        }\n    "])));
exports.CreateInstructorResponse = apollo_server_express_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        type CreateInstructorResponse {\n        success: Boolean!\n        message: String!\n        instructor: Instructor\n    }\n    "], ["\n        type CreateInstructorResponse {\n        success: Boolean!\n        message: String!\n        instructor: Instructor\n    }\n    "])));
exports.UpdateInstructorResponse = apollo_server_express_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        type UpdateInstructorResponse {\n        success: Boolean!\n        message: String!\n        instructor: Instructor\n        }\n    "], ["\n        type UpdateInstructorResponse {\n        success: Boolean!\n        message: String!\n        instructor: Instructor\n        }\n    "])));
exports.DeleteInstructorResponse = apollo_server_express_1.gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        type DeleteInstructorResponse {\n        success: Boolean!\n        message: String!\n        instructor: Instructor\n    }\n    "], ["\n        type DeleteInstructorResponse {\n        success: Boolean!\n        message: String!\n        instructor: Instructor\n    }\n    "])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
