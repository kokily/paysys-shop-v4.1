import { gql } from '@apollo/client';

// Add Wedding API
export const ADD_WEDDING = gql`
  mutation AddWedding(
    $husband_name: String!
    $bride_name: String!
    $wedding_at: String!
    $event_at: String!
    $company_husband: Int!
    $company_bride: Int!
    $rooftop_husband: Int!
    $rooftop_bride: Int!
    $owner_woman_husband: Int!
    $owner_woman_bride: Int!
    $owner_man_husband: Int!
    $owner_man_bride: Int!
    $select_husband: Int!
    $select_bride: Int!
    $frame_husband: Int!
    $frame_bride: Int!
    $dress_husband: Int!
    $dress_bride: Int!
    $hairpin_husband: Int!
    $hairpin_bride: Int!
    $wig_husband: Int!
    $wig_bride: Int!
    $video_husband: Int!
    $video_bride: Int!
    $etc_husband: Int!
    $etc_bride: Int!
    $rental_husband: Int!
    $rental_bride: Int!
    $sword_husband: Int!
    $sword_bride: Int!
    $glove_husband: Int!
    $glove_bride: Int!
    $bouquet_husband: Int!
    $bouquet_bride: Int!
    $ceremony_husband: Int!
    $ceremony_bride: Int!
    $play_husband: Int!
    $play_bride: Int!
    $anthem_husband: Int!
    $anthem_bride: Int!
    $moderator_husband: Int!
    $moderator_bride: Int!
    $officiate_husband: Int!
    $officiate_bride: Int!
    $hanbok_pre_husband: Int!
    $hanbok_pre_bride: Int!
    $hanbok_post_husband: Int!
    $hanbok_post_bride: Int!
    $meals: String!
    $meals_price: Int!
    $meals_num_husband: Int!
    $meals_num_bride: Int!
    $present: String!
    $present_price: Int!
    $present_num_husband: Int!
    $present_num_bride: Int!
    $reserve: String!
    $reserve_pay: Int!
    $reserve_husband: Int!
    $reserve_bride: Int!
  ) {
    AddWedding(
      husband_name: $husband_name
      bride_name: $bride_name
      wedding_at: $wedding_at
      event_at: $event_at
      company_husband: $company_husband
      company_bride: $company_bride
      rooftop_husband: $rooftop_husband
      rooftop_bride: $rooftop_bride
      owner_woman_husband: $owner_woman_husband
      owner_woman_bride: $owner_woman_bride
      owner_man_husband: $owner_man_husband
      owner_man_bride: $owner_man_bride
      select_husband: $select_husband
      select_bride: $select_bride
      frame_husband: $frame_husband
      frame_bride: $frame_bride
      dress_husband: $dress_husband
      dress_bride: $dress_bride
      hairpin_husband: $hairpin_husband
      hairpin_bride: $hairpin_bride
      wig_husband: $wig_husband
      wig_bride: $wig_bride
      video_husband: $video_husband
      video_bride: $video_bride
      etc_husband: $etc_husband
      etc_bride: $etc_bride
      rental_husband: $rental_husband
      rental_bride: $rental_bride
      sword_husband: $sword_husband
      sword_bride: $sword_bride
      glove_husband: $glove_husband
      glove_bride: $glove_bride
      bouquet_husband: $bouquet_husband
      bouquet_bride: $bouquet_bride
      ceremony_husband: $ceremony_husband
      ceremony_bride: $ceremony_bride
      play_husband: $play_husband
      play_bride: $play_bride
      anthem_husband: $anthem_husband
      anthem_bride: $anthem_bride
      moderator_husband: $moderator_husband
      moderator_bride: $moderator_bride
      officiate_husband: $officiate_husband
      officiate_bride: $officiate_bride
      hanbok_pre_husband: $hanbok_pre_husband
      hanbok_pre_bride: $hanbok_pre_bride
      hanbok_post_husband: $hanbok_post_husband
      hanbok_post_bride: $hanbok_post_bride
      meals: $meals
      meals_price: $meals_price
      meals_num_husband: $meals_num_husband
      meals_num_bride: $meals_num_bride
      present: $present
      present_price: $present_price
      present_num_husband: $present_num_husband
      present_num_bride: $present_num_bride
      reserve: $reserve
      reserve_pay: $reserve_pay
      reserve_husband: $reserve_husband
      reserve_bride: $reserve_bride
    ) {
      ok
      error
    }
  }
`;

// List Weddings API
export const LIST_WEDDINGS = gql`
  query ListWeddings($date: String!, $cursor: ID) {
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
        updated_at
      }
    }
  }
`;

// Read Wedding API
export const READ_WEDDING = gql`
  query ReadWedding($id: ID!) {
    ReadWedding(id: $id) {
      ok
      error
      wedding {

      }
      company {

      }
      convention {

      }
      event {

      }
      hanbok {

      }
      meal {

      }
      present {

      }
      reserve {
        
      }
    }
  }
`;

// Remove Wedding API
export const REMOVE_WEDDING = gql``;

// Update Wedding API
export const UPDATE_WEDDING = gql``;
