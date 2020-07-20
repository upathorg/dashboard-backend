import { Query } from "./schemas/query";
import {
  CreateStudentResponse,
  UpdateStudentResponse,
  DeleteStudentResponse,
  StudentType,
} from "./schemas/student_type";
import {
  CreateCourseResponse,
  UpdateCourseResponse,
  DeleteCourseResponse,
  EnrollCourseResponse,
  CourseType,
} from "./schemas/course_type";
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
