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

export const QUERY_PUZZLE = gql`
  query puzzle($_id: Number!) {
    puzzle(username: $username) {
      _id
      username
      email
    }
  }
`;
