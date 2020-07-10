"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const resolvers_1 = require("./graphql/resolvers");
const schema_1 = require("./graphql/schema");
const app = express_1.default();
// Creating the graphql apollo server
const apolloServer = new apollo_server_express_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: resolvers_1.resolvers });
apolloServer.applyMiddleware({ app, path: "/graphql" });
// Cross-Origin Resource Sharing MiddleWare
app.use(cors_1.default());
// localhost port
const port = 7000;
// listening for start of server
app.listen(port, () => {
    console.log(`Server running on localhost:${port}/graphql`);
});
