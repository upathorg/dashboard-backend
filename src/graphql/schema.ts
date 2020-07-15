import { gql } from "apollo-server-express";

export const typeDefs = gql`
  # user table schema

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    username: String
    password: String
  }

  type Query {
    user(id: ID!): User
    users: [User!]
  }

  type Mutation {
    createUser(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
    ): User!

    deleteUser(id: ID!): DeleteUserResponse!
  }


  type DeleteUserResponse{
    success: Boolean!
    message: String!
    user: User
  }
`;
