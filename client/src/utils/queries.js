import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      username
      email
      puzzles {
        _id
        title
        difficulty
        img
      }
    }
  }
`;

export const QUERY_PUZZLES = gql`
  query getPuzzles {
    puzzles {
      _id
      difficulty
      img
    }
  }
`;

export const QUERY_PUZZLE = gql`
query Puzzle($puzzleId: ID!) {
  puzzle(id: $puzzleId) {
    _id
    title
    difficulty
    img
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      puzzles {
        _id
        title
        img
        difficulty
        author
      }
    }
  }
`;
