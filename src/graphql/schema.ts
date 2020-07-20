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
  mutations,
];
