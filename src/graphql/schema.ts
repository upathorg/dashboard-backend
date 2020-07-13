import { gql } from "apollo-server-express";

export const typeDefs = gql`
  # user table schema

  type User {
    id: ID!
    first_name: String
    last_name: String
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
      first_name: String
      last_name: String
      username: String
      email: String
      password: String
    ): User!
  }
`;
