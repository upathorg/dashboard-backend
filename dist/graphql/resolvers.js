"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var studentResolvers_1 = require("./resolvers/studentResolvers");
var mutationResolvers_1 = require("./resolvers/mutationResolvers");
var courseResolvers_1 = require("./resolvers/courseResolvers");
var instructorResolvers_1 = require("./resolvers/instructorResolvers");
exports.resolvers = [
    studentResolvers_1.studentResolvers,
    mutationResolvers_1.mutationResolvers,
    courseResolvers_1.courseResolvers,
    instructorResolvers_1.InstructorResolvers
];
