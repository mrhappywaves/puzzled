const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
// const { authMiddleware } = require('./util/auth');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

 server.applyMiddleware({ app });

 db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`)
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    });
  
  });