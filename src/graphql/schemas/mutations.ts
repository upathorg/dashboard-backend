import { gql } from "apollo-server-express";

export const mutations = gql`
  type Mutation {
    createStudent(
      firstName: String
      lastName: String
      username: String
      email: String
    ): CreateStudentResponse!

    updateStudent(
      id: ID!
      firstName: String
      lastName: String
      username: String
      email: String
    ): UpdateStudentResponse!

    deleteStudent(id: ID!): DeleteStudentResponse!

    createCourse(
      title: String
      description: String
      ratings: Float
      instructor_id: Int
    ): CreateCourseResponse!

    updateCourse(
      id: ID!
      title: String
      description: String
      ratings: Float
    ): UpdateCourseResponse!

    deleteCourse(id: ID!): DeleteCourseResponse!

    createStudentCourses(student_id: Int, course_id: Int): EnrollCourseResponse!

    createInstructor(
      firstName: String
      lastName: String
      username: String
      email: String
    ): CreateInstructorResponse!

    updateInstructor(
      id: ID!
      firstName: String
      lastName: String
      username: String
      email: String
    ): UpdateInstructorResponse!

    deleteInstructor(id: ID!): DeleteInstructorResponse!
  }
`;
