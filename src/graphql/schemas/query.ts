import { gql } from "apollo-server-express";

export const Query = gql`
 
  # All Database Queries and mutations
  type Query {
    student(id: ID!): Student
    students: [Student!]
    course(id: ID!): Course
    courses: [Course!]
    instructor(id: ID!): Instructor
    instructors: [Instructor]
  }

`;



