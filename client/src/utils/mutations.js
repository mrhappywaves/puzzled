import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_PUZZLE = gql`
  mutation addPuzzle($userId: ID!, $puzzle: String!){
    addPuzlle(userId: $userId, puzzle: $puzzle) {
      _id
      username
      puzzles {
        _id
        title
        image
        owner
        difficulty
      }
    }
  }
`;

export const REMOVE_PUZZLE = gql`
  mutation removePuzzle($puzzleId: ID!) {
    removePuzzle(puzzleId: $puzzleId) {
      _id
      username
      email
      puzzles
    }
  }
`;
