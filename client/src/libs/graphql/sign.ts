import { gql } from '@apollo/client';

export const ADD_SIGN = gql`
  mutation AddSign($weddingId: ID!, $sex: String!, $image: String!) {
    AddSign(weddingId: $weddingId, sex: $sex, image: $image) {
      ok
      error
    }
  }
`;

export const REMOVE_SIGN = gql`
  mutation RemoveSign($weddingId: ID!) {
    RemoveSign(weddingId: $weddingId) {
      ok
      error
    }
  }
`;
