const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./util/auth');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

 server.applyMiddleware({ app });