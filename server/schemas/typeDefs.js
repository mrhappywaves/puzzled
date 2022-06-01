const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    puzzles: [Puzzle]!
  }

  type Puzzle {
    _id: ID
    title: String
    difficulty: Int
    img: String
    author: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    puzzles: [Puzzle]
    puzzle(id: ID!): Puzzle
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPuzzle(title: String!, img: String!, difficulty: Int!): Puzzle
    removePuzzle(id: ID!): Puzzle
  }
`;

module.exports = typeDefs;