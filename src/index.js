import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import winston from 'winston/lib/winston/config';
import {typeDefs, resolvers} from './graphql';
import { APP_PORT, DB, NODE_ENV } from './variables/variables';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({req}) => ({
        token: req.headers.authorization || '',
        refresh_token : req.headers.refresh_token || ''
     })
});

const startApp = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser:true,
            useUnifiedTopology: true 
        });
        await server.start();
        server.applyMiddleware( {app, cors: true});
        app.listen({ port: APP_PORT}, () => {
            console.log(`Server is listening on port ${ APP_PORT }`)
        })
    } catch (error) {
        console.log(error)
    }
}
startApp();
