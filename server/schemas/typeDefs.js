const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Puzzle {
    _id: ID
    createdBy: String
    title: String
    img: String
    difficulty: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    puzzles: [Puzzle]
    puzzle(img: String!, title: String!, difficulty: Int!): Puzzle
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPuzzle(puzzleId: ID!, createdBy: String!, title: String!, img: String!, difficulty: Int!): Puzzle
    removePuzzle: Puzzle
  }
`;

module.exports = typeDefs;