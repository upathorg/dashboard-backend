import {gql} from 'apollo-server-express';
import { DocumentNode } from 'graphql';


// schema definition from the query in the schema.graphql file
export const typeDefs: DocumentNode = gql`
    type Query {
        greeting: String,
        name: String
    }
`;