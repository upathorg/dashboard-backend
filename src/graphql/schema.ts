import { Query } from "./schemas/query";
import {
  CreateStudentResponse,
  UpdateStudentResponse,
  DeleteStudentResponse,
  StudentType,
} from "./schemas/studentType";
import {
  CreateCourseResponse,
  UpdateCourseResponse,
  DeleteCourseResponse,
  EnrollCourseResponse,
  CourseType,
} from "./schemas/courseType";
import { mutations } from "./schemas/mutations";
import { InstructorType, CreateInstructorResponse, UpdateInstructorResponse, DeleteInstructorResponse } from "./schemas/instructorType";

export const typeDefs = [
  Query,
  StudentType,
  CreateStudentResponse,
  UpdateStudentResponse,
  DeleteStudentResponse,
  CourseType,
  CreateCourseResponse,
  UpdateCourseResponse,
  DeleteCourseResponse,
  EnrollCourseResponse,
  InstructorType,
  CreateInstructorResponse,
  UpdateInstructorResponse,
  DeleteInstructorResponse,
  mutations,
];
