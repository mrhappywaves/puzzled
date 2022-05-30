import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const GET_ME = gql`
  {
    me: {
      _id
      username
      email
      puzzles
    }
  }
`;

export const QUERY_PUZZLES = gql`
  query allPuzzles {
    puzzles {
      _id
      title
      image
      owner
      difficulty
    }
  }
`;

export const QUERY_SINGLE_PUZZLE = gql`
  query singlePuzzle($puzzleId : ID!) {
    puzzle(puzzleId: $puzzleId) {
      _id
      title
      image
      owner
      difficulty
    }
  }
`;