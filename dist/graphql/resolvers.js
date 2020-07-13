"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
// Resolvers that sends the kind of data to be sent as api
exports.resolvers = {
    Query: {
        greeting: () => "Hello GraphQL World",
        name: () => "Hello Team Yellow"
    }
};
