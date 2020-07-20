import { gql } from "apollo-server-express";

export const mutations = gql`
  type Mutation {
    createStudent(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
    ): CreateStudentResponse!

    updateStudent(
      id: ID!
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
    ): UpdateStudentResponse!

    deleteStudent(id: ID!): DeleteStudentResponse!

    createCourse(
      title: String
      description: String
      ratings: Float
    ): CreateCourseResponse!

    updateCourse(
      id: ID!
      title: String
      description: String
      ratings: Float
    ): UpdateCourseResponse!

    deleteCourse(id: ID!): DeleteCourseResponse!

    createStudentCourses(student_id: Int, course_id: Int): EnrollCourseResponse!
  }
`;
