import { gql } from '@apollo/client';

// List Weddings API
export const LIST_WEDDINGS = gql`
  query ListWeddings($date: String, $cursor: ID) {
    ListWeddings(date: $date, cursor: $cursor) {
      ok
      error
      weddings {
        id
        husband_name
        bride_name
        wedding_at
        event_at
        created_at
      }
    }
  }
`;