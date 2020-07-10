"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// schema definition from the query in the schema.graphql file
exports.typeDefs = apollo_server_express_1.gql `
    type Query {
        greeting: String,
        name: String
    }
`;
