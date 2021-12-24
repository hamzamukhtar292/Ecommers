import { gql } from 'apollo-server-express';

export  const authtypeDefs = gql`
    extend type Query {
        profile: User!,
        user: [User!]!,
        refreshToken: Auth!,
        login( username: String!, password: String!): Auth!
    }
    type User {
        name: String!,
        id:ID!,
        username: String!,
        email: String!,
        createdAt: String!,
        updatedAt: String!,
        },

    type Auth {
        user: User!,
        token: String!,
        refreshToken: String!,
    },

    extend type Mutation {
        register( 
            name: String!,
            email: String!,
            username: String!,
            password: String!,
        ): Auth!
    }
`
export const authResolvers = {

}