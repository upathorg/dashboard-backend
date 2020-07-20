import { gql } from "apollo-server-express";

// Course table schema and responses
export const CourseType = gql`
  type Course {
    id: ID!
    title: String
    description: String
    ratings: Float
    instructor_id: Int
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
  type EnrollCourseResponse {
    success: Boolean!
    message: String!
  }
`;
