"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.Query = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n \n  # All Database Queries and mutations\n  type Query {\n    student(id: ID!): Student\n    students: [Student!]\n    course(id: ID!): Course\n    courses: [Course!]\n    instructor(id: ID!): Instructor\n    instructors: [Instructor]\n  }\n\n"], ["\n \n  # All Database Queries and mutations\n  type Query {\n    student(id: ID!): Student\n    students: [Student!]\n    course(id: ID!): Course\n    courses: [Course!]\n    instructor(id: ID!): Instructor\n    instructors: [Instructor]\n  }\n\n"])));
var templateObject_1;
