"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const resolvers_1 = require("./graphql/resolvers");
const app = express_1.default();
// schema definition from the query in the schema.graphql file
const typeDefs = apollo_server_express_1.gql(fs_1.default.readFileSync(path_1.default.join(__dirname, 'graphql/schema.graphql'), { encoding: 'utf-8' }));
// Creating the graphql apollo server
const apolloServer = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers: resolvers_1.resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' });
// Cross-Origin Resource Sharing MiddleWare
app.use(cors_1.default());
// localhost port
const port = 7000;
// listening for start of server
app.listen(port, () => {
    console.log(`Server running on localhost:${port}/graphql`);
});
