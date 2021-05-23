import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    Login(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`;

export const REGISTER = gql`
  mutation Register($username: String!, $password: String!) {
    Register(username: $username, password: $password) {
      ok
      error
    }
  }
`;

export const ME = gql`
  query Me {
    Me {
      ok
      error
      me {
        id
        username
        admin
      }
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword($password: String!) {
    ChangePassword(password: $password) {
      ok
      error
    }
  }
`;
