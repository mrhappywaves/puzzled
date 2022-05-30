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

export const QUERY_PUZZLES = gql`
  query getPuzzles {
    puzzles {
      _id
      difficulty
      img
    }
  }
`;
