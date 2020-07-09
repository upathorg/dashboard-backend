import express, { Application } from "express";
import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { resolvers } from "./graphql/resolvers";
import { DocumentNode } from "graphql";

const app: Application = express();

// schema definition from the query in the schema.graphql file
const typeDefs: DocumentNode = gql(
  fs.readFileSync(path.join(__dirname, "graphql/schema.graphql"), {
    encoding: "utf-8",
  })
);

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
