import { gql } from "apollo-server-express";

export const CourseType = gql`
  # Course table schema and responses
  type Course {
    id: ID!
    title: String
    description: String
    ratings: Float
    students: [Student]
  }
`;

export const CreateCourseResponse = gql`
  type CreateCourseResponse {
    success: Boolean!
    message: String!
    course: Course!
  }
`;

export const UpdateCourseResponse = gql`
  type UpdateCourseResponse {
    success: Boolean!
    message: String!
    course: Course
  }
`;

export const DeleteCourseResponse = gql`
 type DeleteCourseResponse {
    success: Boolean!
    message: String!
    course: Course
  }
`;

export const EnrollCourseResponse = gql`
type EnrollCourseResponse{
    success: Boolean!
    message: String!
  }
`;


