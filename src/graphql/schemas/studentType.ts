import { gql } from "apollo-server-express";

// Student table schema and responses
export const StudentType = 
    gql`
        
        type Student {
        id: ID!
        firstName: String
        lastName: String
        email: String
        username: String
        password: String
        courses: [Course]
        }
    `

export const CreateStudentResponse =   
    gql`
        type CreateStudentResponse {
        success: Boolean!
        message: String!
        student: Student
    }
    `

export const UpdateStudentResponse =   
    gql`
        type UpdateStudentResponse {
        success: Boolean!
        message: String!
        student: Student
        }
    `

export const DeleteStudentResponse =   
    gql`
        type DeleteStudentResponse {
        success: Boolean!
        message: String!
        student: Student
    }
    `

