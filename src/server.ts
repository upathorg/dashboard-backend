import express, { Application } from "express";
import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schema";

const app: Application = express();

// Creating the graphql apollo server
const apolloServer: ApolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: "/graphql" });

// Cross-Origin Resource Sharing MiddleWare
app.use(cors());

// localhost port
const port = 7000;

// listening for start of server
app.listen(port, () => {
  console.log(`Server running on localhost:${port}/graphql`);
});
