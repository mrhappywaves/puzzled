const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware
// });

//  server.applyMiddleware({ app });

 app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

//  db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`🌍 Now listening on localhost:${PORT}`)
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
//     });
  
//   });