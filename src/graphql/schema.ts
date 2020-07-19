import { gql } from "apollo-server-express";

export const typeDefs = gql`
  # Student table schema and responses
  type Student {
    id: ID!
    firstName: String
    lastName: String
    email: String
    username: String
    password: String
    courses: [Course]
  }

  type CreateStudentResponse {
    success: Boolean!
    message: String!
    student: Student
  }

  type UpdateStudentResponse {
    success: Boolean!
    message: String!
    student: Student
  }

  type DeleteStudentResponse {
    success: Boolean!
    message: String!
    student: Student
  }

  # Course table schema and responses
  type Course {
    id: ID!
    title: String
    description: String
    ratings: Float
    students: [Student]
  }

  type CreateCourseResponse {
    success: Boolean!
    message: String!
    course: Course!
  }

  type UpdateCourseResponse {
    success: Boolean!
    message: String!
    course: Course
  }

  type DeleteCourseResponse {
    success: Boolean!
    message: String!
    course: Course
  }

  type EnrollCourseResponse{
    success: Boolean!
    message: String!
  }

  # All Database Queries and mutations
  type Query {
    student(id: ID!): Student
    students: [Student!]
    course(id: ID!): Course
    courses: [Course!]
  }


  type Mutation {
    createStudent(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
    ): CreateStudentResponse!

    deleteStudent(id: ID!): DeleteStudentResponse!

    updateStudent(
      id: ID!
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
    ): UpdateStudentResponse!

    # course table mutation
    createCourse(

      title: String
      description: String
      ratings: Float
    ): CreateCourseResponse!

    deleteCourse(id: ID!): DeleteCourseResponse!

    updateCourse(
      id: ID!
      title: String
      description: String
      ratings: Float
    ): UpdateCourseResponse!

    # enroll course table mutation
    createStudentCourses(
      student_id: Int
      course_id: Int
    ): EnrollCourseResponse!

  }
`;
