import express, { Application } from "express";
import cors from "cors";
require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schema";

const app: Application = express();

// Set up Apollo Server
const apolloServer: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});
apolloServer.applyMiddleware({ app, path: "/graphql" });

app.use(cors());
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on localhost:${port}/graphql`);
});
