import { gql } from "apollo-server-express";

// Instructor table schema and responses
export const InstructorType = 
    gql`
        type Instructor {
        id: ID!
        firstName: String
        lastName: String
        email: String
        username: String
        courses: [Course]
        }
    `

export const CreateInstructorResponse =   
    gql`
        type CreateInstructorResponse {
        success: Boolean!
        message: String!
        instructor: Instructor
    }
    `

export const UpdateInstructorResponse =   
    gql`
        type UpdateInstructorResponse {
        success: Boolean!
        message: String!
        instructor: Instructor
        }
    `

export const DeleteInstructorResponse =   
    gql`
        type DeleteInstructorResponse {
        success: Boolean!
        message: String!
        instructor: Instructor
    }
    `

