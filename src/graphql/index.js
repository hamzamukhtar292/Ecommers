import { gql } from 'apollo-server-express';
import { merge } from 'lodash';

const Query =  gql `

    type Query {
        _: String
    }
`
const Mutation = gql `
    type Mutation {
        _: String
}
`
export const typeDefs = [
    Query,
    Mutation
]