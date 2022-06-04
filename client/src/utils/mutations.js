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

export const ADD_PUZZLE = gql`
  mutation AddPuzzle($title: String!, $img: String!, $difficulty: Int!) {
    addPuzzle(title: $title, img: $img, difficulty: $difficulty) {
      author
      img
      difficulty
      title
    }
  }
`;

export const REMOVE_PUZZLE = gql`
mutation RemovePuzzle($id: ID!) {
  removePuzzle(_id: $id) {
    _id
  }
}
`;

