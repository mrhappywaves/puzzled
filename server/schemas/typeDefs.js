const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Puzzle {
    _id: ID
    title: String
    image: String
    difficulty: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    puzzles: [Puzzle]
    puzzle: Puzzle
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPuzzle(puzzle: String): User 
    removePuzzle(puzzleId: ID!): User
  }
`;

module.exports = typeDefs;