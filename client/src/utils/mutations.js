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
      }
    }
  }
`;

export const CREATE_PUZZLE = gql`
  mutation addPuzzle($img: Buffer!, $title: String!, $difficulty: Number!) {
    addPuzzle(img: $img, title: $title, difficulty: $difficulty) {
      token
      puzzle {
        _id
        title
        createdby
      }
    }
  }
`;

export const DELETE_PUZZLE = gql`
  mutation deletePuzzle($img: Buffer!, $title: String!, $difficulty: Number!) {
    deletePuzzle(img: $img, title: $title, difficulty: $difficulty) {
      token
      puzzle {
        _id
        title
        createdby
      }
    }
  }
`;