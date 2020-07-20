"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("dotenv").config();
var apollo_server_express_1 = require("apollo-server-express");
var resolvers_1 = require("./graphql/resolvers");
var schema_1 = require("./graphql/schema");
var app = express_1.default();
// Set up Apollo Server
var apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    introspection: true,
    playground: true,
});
apolloServer.applyMiddleware({ app: app, path: "/graphql" });
app.use(cors_1.default());
var port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log("Server running on localhost:" + port + "/graphql");
});
