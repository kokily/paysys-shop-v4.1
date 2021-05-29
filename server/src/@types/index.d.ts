export const typeDefs = ["type ChangePasswordResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  ChangePassword(password: String!): ChangePasswordResponse!\n  Login(username: String!, password: String!): LoginResponse!\n  Register(username: String!, password: String!): RegisterResponse!\n  AddBill(title: String!, hall: String!, etc: String!): AddBillResponse!\n  RemoveBill(id: ID!): RemoveBillResponse!\n  RestoreBill(id: ID!): RestoreBillResponse!\n  AddCart(item_id: ID!, count: Int!, price: Int!): AddCartResponse!\n  RemoveCart: RemoveCartResponse!\n  RemoveOne(item_id: ID!): RemoveOneResponse!\n  AddClosed(year: String!, month: String!, users: [InputUser]!): AddClosedResponse!\n  RemoveClosed(id: ID!): RemoveClosedResponse!\n  AddItem(name: String!, divide: String!, native: String!, unit: String!, price: Int!): AddItemResponse!\n  RemoveItem(id: ID!): RemoveItemResponse!\n  UpdateItem(id: ID!, name: String, divide: String, native: String, unit: String, price: Int): UpdateItemResponse!\n  AddReserve(bill_id: ID!, reserve: Int!): AddReserveResponse!\n  RemoveReserve(id: ID!): RemoveReserveResponse!\n  InitPassword(id: ID!): InitPasswordResponse!\n  RemoveUser(id: ID!): RemoveUserResponse!\n  SetAdmin(id: ID!): SetAdminResponse!\n  SetEmployee(id: ID!): SetEmployeeResponse!\n  AddWedding(husband_name: String!, bride_name: String!, wedding_at: String!, event_at: String!, company_husband: Int!, company_bride: Int!, rooftop_husband: Int!, rooftop_bride: Int!, owner_woman_husband: Int!, owner_woman_bride: Int!, owner_man_husband: Int!, owner_man_bride: Int!, select_husband: Int!, select_bride: Int!, frame_husband: Int!, frame_bride: Int!, dress_husband: Int!, dress_bride: Int!, hairpin_husband: Int!, hairpin_bride: Int!, wig_husband: Int!, wig_bride: Int!, video_husband: Int!, video_bride: Int!, etc_husband: Int!, etc_bride: Int!, rental_husband: Int!, rental_bride: Int!, sword_husband: Int!, sword_bride: Int!, glove_husband: Int!, glove_bride: Int!, bouquet_husband: Int!, bouquet_bride: Int!, ceremony_husband: Int!, ceremony_bride: Int!, play_husband: Int!, play_bride: Int!, anthem_husband: Int!, anthem_bride: Int!, moderator_husband: Int!, moderator_bride: Int!, officiate_husband: Int!, officiate_bride: Int!, hanbok_pre_husband: Int!, hanbok_pre_bride: Int!, hanbok_post_husband: Int!, hanbok_post_bride: Int!, meals: String!, meals_price: Int!, meals_num_husband: Int!, meals_num_bride: Int!, present: String!, present_price: Int!, present_num_husband: Int!, present_num_bride: Int!, reserve: String!, reserve_pay: Int!, cost_husband: Int!, cost_bride: Int!, meal_husband: Int!, meal_bride: Int!, present_husband: Int!, present_bride: Int!, reserve_husband: Int!, reserve_bride: Int!): AddWeddingResponse!\n  RemoveWedding(id: ID!): RemoveWeddingResponse!\n  UpdateWedding(id: ID!, husband_name: String!, bride_name: String!, wedding_at: String!, event_at: String!, company_husband: Int!, company_bride: Int!, rooftop_husband: Int!, rooftop_bride: Int!, owner_woman_husband: Int!, owner_woman_bride: Int!, owner_man_husband: Int!, owner_man_bride: Int!, select_husband: Int!, select_bride: Int!, frame_husband: Int!, frame_bride: Int!, dress_husband: Int!, dress_bride: Int!, hairpin_husband: Int!, hairpin_bride: Int!, wig_husband: Int!, wig_bride: Int!, video_husband: Int!, video_bride: Int!, etc_husband: Int!, etc_bride: Int!, rental_husband: Int!, rental_bride: Int!, sword_husband: Int!, sword_bride: Int!, glove_husband: Int!, glove_bride: Int!, bouquet_husband: Int!, bouquet_bride: Int!, ceremony_husband: Int!, ceremony_bride: Int!, play_husband: Int!, play_bride: Int!, anthem_husband: Int!, anthem_bride: Int!, moderator_husband: Int!, moderator_bride: Int!, officiate_husband: Int!, officiate_bride: Int!, hanbok_pre_husband: Int!, hanbok_pre_bride: Int!, hanbok_post_husband: Int!, hanbok_post_bride: Int!, meals: String!, meals_price: Int!, meals_num_husband: Int!, meals_num_bride: Int!, present: String!, present_price: Int!, present_num_husband: Int!, present_num_bride: Int!, reserve: String!, reserve_pay: Int!, cost_husband: Int!, cost_bride: Int!, meal_husband: Int!, meal_bride: Int!, present_husband: Int!, present_bride: Int!, reserve_husband: Int!, reserve_bride: Int!): UpdateWeddingResponse!\n}\n\ntype LoginResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype MeResponse {\n  ok: Boolean!\n  error: String\n  me: MeType\n}\n\ntype Query {\n  Me: MeResponse!\n  ListBills(cursor: ID, user_id: ID, title: String, hall: String): ListBillsResponse!\n  ReadBill(id: ID!): ReadBillResponse!\n  ViewCart: ViewCartResponse!\n  ListCloseds(cursor: ID): ListClosedsResponse!\n  ReadClosed(id: ID!): ReadClosedResponse!\n  ListItems(cursor: ID, name: String, divide: String, native: String): ListItemsResponse!\n  ReadItem(id: ID!): ReadItemResponse!\n  ListUsers(username: String, cursor: ID): ListUsersResponse!\n  ReadUser(id: ID!): ReadUserResponse!\n  ListWeddings(date: String, cursor: ID): ListWeddingsResponse!\n  ReadWedding(id: ID!): ReadWeddingResponse!\n}\n\ntype RegisterResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddBillResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListBillsResponse {\n  ok: Boolean!\n  error: String\n  bills: [Bill]\n}\n\ntype ReadBillResponse {\n  ok: Boolean!\n  error: String\n  bill: Bill\n}\n\ntype RemoveBillResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype RestoreBillResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddCartResponse {\n  ok: Boolean!\n  error: String\n  cart: Cart\n}\n\ntype RemoveCartResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype RemoveOneResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ViewCartResponse {\n  ok: Boolean!\n  error: String\n  cart: Cart\n}\n\ntype AddClosedResponse {\n  ok: Boolean!\n  error: String\n}\n\ninput InputUser {\n  username: String!\n  closed_date: [String]\n}\n\ntype ListClosedsResponse {\n  ok: Boolean!\n  error: String\n  closeds: [Closed]\n}\n\ntype ReadClosedResponse {\n  ok: Boolean!\n  error: String\n  closed: Closed\n  closed_users: [ClosedUser]\n}\n\ntype RemoveClosedResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddItemResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListItemsResponse {\n  ok: Boolean!\n  error: String\n  items: [Item]\n}\n\ntype ReadItemResponse {\n  ok: Boolean!\n  error: String\n  item: Item\n}\n\ntype RemoveItemResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype UpdateItemResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddReserveResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype RemoveReserveResponse {\n  ok: Boolean!\n  error: String\n}\n\nscalar Date\n\ntype Closed {\n  id: ID!\n  year: String!\n  month: String!\n  closed_users: [ClosedUser]\n  created_at: Date!\n}\n\ntype ClosedUser {\n  id: ID!\n  username: String!\n  closed_date: [String]\n  closedId: ID!\n  closed: Closed\n  created_at: Date!\n}\n\ntype User {\n  id: ID!\n  username: String!\n  password: String!\n  admin: Boolean!\n  created_at: Date!\n  updated_at: Date\n}\n\ntype MeType {\n  id: ID!\n  username: String!\n  admin: Boolean!\n}\n\ntype InputItem {\n  id: ID!\n  name: String!\n  divide: String!\n  native: String!\n  unit: String!\n  price: Int!\n  count: Int!\n  amount: Int!\n}\n\ntype Item {\n  id: ID!\n  num: Int!\n  name: String!\n  divide: String!\n  native: String!\n  unit: String!\n  price: Int!\n  created_at: Date!\n  updated_at: Date\n}\n\ntype Cart {\n  id: ID!\n  items: [InputItem]!\n  completed: Boolean!\n  deleted: Boolean!\n  created_at: Date!\n  updated_at: Date\n  user_id: String!\n  bill_id: String\n}\n\ntype Bill {\n  id: ID!\n  title: String!\n  hall: String!\n  etc: String!\n  total_amount: Int!\n  items: [InputItem]\n  reserve: Int\n  username: String!\n  user_id: String!\n  cart_id: String!\n  created_at: Date!\n}\n\ntype Wedding {\n  id: ID!\n  husband_name: String!\n  bride_name: String!\n  wedding_at: String!\n  event_at: String!\n  cost_husband: Int!\n  cost_bride: Int!\n  meal_husband: Int!\n  meal_bride: Int!\n  present_husband: Int!\n  present_bride: Int!\n  reserve_husband: Int!\n  reserve_bride: Int!\n  created_at: Date!\n  updated_at: Date\n  conventionId: String\n  convention: Convention\n  companyId: String\n  company: Company\n  hanbokId: String\n  hanbok: Hanbok\n  eventId: String\n  event: Event\n  mealId: String\n  meal: Meal\n  presentId: String\n  present: Present\n  reserveId: String\n  reserve: Reserve\n}\n\ntype Company {\n  id: ID!\n  company_husband: Int!\n  company_bride: Int!\n  rooftop_husband: Int!\n  rooftop_bride: Int!\n  owner_woman_husband: Int!\n  owner_woman_bride: Int!\n  owner_man_husband: Int!\n  owner_man_bride: Int!\n  select_husband: Int!\n  select_bride: Int!\n  frame_husband: Int!\n  frame_bride: Int!\n  dress_husband: Int!\n  dress_bride: Int!\n  hairpin_husband: Int!\n  hairpin_bride: Int!\n  wig_husband: Int!\n  wig_bride: Int!\n  video_husband: Int!\n  video_bride: Int!\n  etc_husband: Int!\n  etc_bride: Int!\n  weddingId: String!\n  wedding: Wedding!\n}\n\ntype Convention {\n  id: ID!\n  rental_husband: Int!\n  rental_bride: Int!\n  sword_husband: Int!\n  sword_bride: Int!\n  glove_husband: Int!\n  glove_bride: Int!\n  bouquet_husband: Int!\n  bouquet_bride: Int!\n  ceremony_husband: Int!\n  ceremony_bride: Int!\n  weddingId: String\n  wedding: Wedding\n}\n\ntype Event {\n  id: ID!\n  play_husband: Int!\n  play_bride: Int!\n  anthem_husband: Int!\n  anthem_bride: Int!\n  moderator_husband: Int!\n  moderator_bride: Int!\n  officiate_husband: Int!\n  officiate_bride: Int!\n  weddingId: String\n  wedding: Wedding\n}\n\ntype Hanbok {\n  id: ID!\n  hanbok_pre_husband: Int!\n  hanbok_pre_bride: Int!\n  hanbok_post_husband: Int!\n  hanbok_post_bride: Int!\n  weddingId: String\n  wedding: Wedding\n}\n\ntype Meal {\n  id: ID!\n  meals: String!\n  meals_price: Int!\n  meals_num_husband: Int!\n  meals_num_bride: Int!\n  weddingId: String\n  wedding: Wedding\n}\n\ntype Present {\n  id: ID!\n  present: String!\n  present_price: Int!\n  present_num_husband: Int!\n  present_num_bride: Int!\n  weddingId: String\n  wedding: Wedding\n}\n\ntype Reserve {\n  id: ID!\n  reserve: String!\n  reserve_pay: Int!\n  weddingId: String\n  wedding: Wedding\n}\n\ntype InitPasswordResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListUsersResponse {\n  ok: Boolean!\n  error: String\n  users: [User]\n}\n\ntype ReadUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype RemoveUserResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype SetAdminResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype SetEmployeeResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddWeddingResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListWeddingsResponse {\n  ok: Boolean!\n  error: String\n  weddings: [Wedding]\n}\n\ntype ReadWeddingResponse {\n  ok: Boolean!\n  error: String\n  wedding: Wedding\n  company: Company\n  convention: Convention\n  event: Event\n  hanbok: Hanbok\n  meal: Meal\n  present: Present\n  reserve: Reserve\n}\n\ntype RemoveWeddingResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype UpdateWeddingResponse {\n  ok: Boolean!\n  error: String\n}\n"];
/* tslint:disable */

export interface Query {
  Me: MeResponse;
  ListBills: ListBillsResponse;
  ReadBill: ReadBillResponse;
  ViewCart: ViewCartResponse;
  ListCloseds: ListClosedsResponse;
  ReadClosed: ReadClosedResponse;
  ListItems: ListItemsResponse;
  ReadItem: ReadItemResponse;
  ListUsers: ListUsersResponse;
  ReadUser: ReadUserResponse;
  ListWeddings: ListWeddingsResponse;
  ReadWedding: ReadWeddingResponse;
}

export interface ListBillsQueryArgs {
  cursor: string | null;
  user_id: string | null;
  title: string | null;
  hall: string | null;
}

export interface ReadBillQueryArgs {
  id: string;
}

export interface ListClosedsQueryArgs {
  cursor: string | null;
}

export interface ReadClosedQueryArgs {
  id: string;
}

export interface ListItemsQueryArgs {
  cursor: string | null;
  name: string | null;
  divide: string | null;
  native: string | null;
}

export interface ReadItemQueryArgs {
  id: string;
}

export interface ListUsersQueryArgs {
  username: string | null;
  cursor: string | null;
}

export interface ReadUserQueryArgs {
  id: string;
}

export interface ListWeddingsQueryArgs {
  date: string | null;
  cursor: string | null;
}

export interface ReadWeddingQueryArgs {
  id: string;
}

export interface MeResponse {
  ok: boolean;
  error: string | null;
  me: MeType | null;
}

export interface MeType {
  id: string;
  username: string;
  admin: boolean;
}

export interface ListBillsResponse {
  ok: boolean;
  error: string | null;
  bills: Array<Bill> | null;
}

export interface Bill {
  id: string;
  title: string;
  hall: string;
  etc: string;
  total_amount: number;
  items: Array<InputItem> | null;
  reserve: number | null;
  username: string;
  user_id: string;
  cart_id: string;
  created_at: Date;
}

export interface InputItem {
  id: string;
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: number;
  count: number;
  amount: number;
}

export type Date = any;

export interface ReadBillResponse {
  ok: boolean;
  error: string | null;
  bill: Bill | null;
}

export interface ViewCartResponse {
  ok: boolean;
  error: string | null;
  cart: Cart | null;
}

export interface Cart {
  id: string;
  items: Array<InputItem>;
  completed: boolean;
  deleted: boolean;
  created_at: Date;
  updated_at: Date | null;
  user_id: string;
  bill_id: string | null;
}

export interface ListClosedsResponse {
  ok: boolean;
  error: string | null;
  closeds: Array<Closed> | null;
}

export interface Closed {
  id: string;
  year: string;
  month: string;
  closed_users: Array<ClosedUser> | null;
  created_at: Date;
}

export interface ClosedUser {
  id: string;
  username: string;
  closed_date: Array<string> | null;
  closedId: string;
  closed: Closed | null;
  created_at: Date;
}

export interface ReadClosedResponse {
  ok: boolean;
  error: string | null;
  closed: Closed | null;
  closed_users: Array<ClosedUser> | null;
}

export interface ListItemsResponse {
  ok: boolean;
  error: string | null;
  items: Array<Item> | null;
}

export interface Item {
  id: string;
  num: number;
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: number;
  created_at: Date;
  updated_at: Date | null;
}

export interface ReadItemResponse {
  ok: boolean;
  error: string | null;
  item: Item | null;
}

export interface ListUsersResponse {
  ok: boolean;
  error: string | null;
  users: Array<User> | null;
}

export interface User {
  id: string;
  username: string;
  password: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date | null;
}

export interface ReadUserResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface ListWeddingsResponse {
  ok: boolean;
  error: string | null;
  weddings: Array<Wedding> | null;
}

export interface Wedding {
  id: string;
  husband_name: string;
  bride_name: string;
  wedding_at: string;
  event_at: string;
  cost_husband: number;
  cost_bride: number;
  meal_husband: number;
  meal_bride: number;
  present_husband: number;
  present_bride: number;
  reserve_husband: number;
  reserve_bride: number;
  created_at: Date;
  updated_at: Date | null;
  conventionId: string | null;
  convention: Convention | null;
  companyId: string | null;
  company: Company | null;
  hanbokId: string | null;
  hanbok: Hanbok | null;
  eventId: string | null;
  event: Event | null;
  mealId: string | null;
  meal: Meal | null;
  presentId: string | null;
  present: Present | null;
  reserveId: string | null;
  reserve: Reserve | null;
}

export interface Convention {
  id: string;
  rental_husband: number;
  rental_bride: number;
  sword_husband: number;
  sword_bride: number;
  glove_husband: number;
  glove_bride: number;
  bouquet_husband: number;
  bouquet_bride: number;
  ceremony_husband: number;
  ceremony_bride: number;
  weddingId: string | null;
  wedding: Wedding | null;
}

export interface Company {
  id: string;
  company_husband: number;
  company_bride: number;
  rooftop_husband: number;
  rooftop_bride: number;
  owner_woman_husband: number;
  owner_woman_bride: number;
  owner_man_husband: number;
  owner_man_bride: number;
  select_husband: number;
  select_bride: number;
  frame_husband: number;
  frame_bride: number;
  dress_husband: number;
  dress_bride: number;
  hairpin_husband: number;
  hairpin_bride: number;
  wig_husband: number;
  wig_bride: number;
  video_husband: number;
  video_bride: number;
  etc_husband: number;
  etc_bride: number;
  weddingId: string;
  wedding: Wedding;
}

export interface Hanbok {
  id: string;
  hanbok_pre_husband: number;
  hanbok_pre_bride: number;
  hanbok_post_husband: number;
  hanbok_post_bride: number;
  weddingId: string | null;
  wedding: Wedding | null;
}

export interface Event {
  id: string;
  play_husband: number;
  play_bride: number;
  anthem_husband: number;
  anthem_bride: number;
  moderator_husband: number;
  moderator_bride: number;
  officiate_husband: number;
  officiate_bride: number;
  weddingId: string | null;
  wedding: Wedding | null;
}

export interface Meal {
  id: string;
  meals: string;
  meals_price: number;
  meals_num_husband: number;
  meals_num_bride: number;
  weddingId: string | null;
  wedding: Wedding | null;
}

export interface Present {
  id: string;
  present: string;
  present_price: number;
  present_num_husband: number;
  present_num_bride: number;
  weddingId: string | null;
  wedding: Wedding | null;
}

export interface Reserve {
  id: string;
  reserve: string;
  reserve_pay: number;
  weddingId: string | null;
  wedding: Wedding | null;
}

export interface ReadWeddingResponse {
  ok: boolean;
  error: string | null;
  wedding: Wedding | null;
  company: Company | null;
  convention: Convention | null;
  event: Event | null;
  hanbok: Hanbok | null;
  meal: Meal | null;
  present: Present | null;
  reserve: Reserve | null;
}

export interface Mutation {
  ChangePassword: ChangePasswordResponse;
  Login: LoginResponse;
  Register: RegisterResponse;
  AddBill: AddBillResponse;
  RemoveBill: RemoveBillResponse;
  RestoreBill: RestoreBillResponse;
  AddCart: AddCartResponse;
  RemoveCart: RemoveCartResponse;
  RemoveOne: RemoveOneResponse;
  AddClosed: AddClosedResponse;
  RemoveClosed: RemoveClosedResponse;
  AddItem: AddItemResponse;
  RemoveItem: RemoveItemResponse;
  UpdateItem: UpdateItemResponse;
  AddReserve: AddReserveResponse;
  RemoveReserve: RemoveReserveResponse;
  InitPassword: InitPasswordResponse;
  RemoveUser: RemoveUserResponse;
  SetAdmin: SetAdminResponse;
  SetEmployee: SetEmployeeResponse;
  AddWedding: AddWeddingResponse;
  RemoveWedding: RemoveWeddingResponse;
  UpdateWedding: UpdateWeddingResponse;
}

export interface ChangePasswordMutationArgs {
  password: string;
}

export interface LoginMutationArgs {
  username: string;
  password: string;
}

export interface RegisterMutationArgs {
  username: string;
  password: string;
}

export interface AddBillMutationArgs {
  title: string;
  hall: string;
  etc: string;
}

export interface RemoveBillMutationArgs {
  id: string;
}

export interface RestoreBillMutationArgs {
  id: string;
}

export interface AddCartMutationArgs {
  item_id: string;
  count: number;
  price: number;
}

export interface RemoveOneMutationArgs {
  item_id: string;
}

export interface AddClosedMutationArgs {
  year: string;
  month: string;
  users: Array<InputUser>;
}

export interface RemoveClosedMutationArgs {
  id: string;
}

export interface AddItemMutationArgs {
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: number;
}

export interface RemoveItemMutationArgs {
  id: string;
}

export interface UpdateItemMutationArgs {
  id: string;
  name: string | null;
  divide: string | null;
  native: string | null;
  unit: string | null;
  price: number | null;
}

export interface AddReserveMutationArgs {
  bill_id: string;
  reserve: number;
}

export interface RemoveReserveMutationArgs {
  id: string;
}

export interface InitPasswordMutationArgs {
  id: string;
}

export interface RemoveUserMutationArgs {
  id: string;
}

export interface SetAdminMutationArgs {
  id: string;
}

export interface SetEmployeeMutationArgs {
  id: string;
}

export interface AddWeddingMutationArgs {
  husband_name: string;
  bride_name: string;
  wedding_at: string;
  event_at: string;
  company_husband: number;
  company_bride: number;
  rooftop_husband: number;
  rooftop_bride: number;
  owner_woman_husband: number;
  owner_woman_bride: number;
  owner_man_husband: number;
  owner_man_bride: number;
  select_husband: number;
  select_bride: number;
  frame_husband: number;
  frame_bride: number;
  dress_husband: number;
  dress_bride: number;
  hairpin_husband: number;
  hairpin_bride: number;
  wig_husband: number;
  wig_bride: number;
  video_husband: number;
  video_bride: number;
  etc_husband: number;
  etc_bride: number;
  rental_husband: number;
  rental_bride: number;
  sword_husband: number;
  sword_bride: number;
  glove_husband: number;
  glove_bride: number;
  bouquet_husband: number;
  bouquet_bride: number;
  ceremony_husband: number;
  ceremony_bride: number;
  play_husband: number;
  play_bride: number;
  anthem_husband: number;
  anthem_bride: number;
  moderator_husband: number;
  moderator_bride: number;
  officiate_husband: number;
  officiate_bride: number;
  hanbok_pre_husband: number;
  hanbok_pre_bride: number;
  hanbok_post_husband: number;
  hanbok_post_bride: number;
  meals: string;
  meals_price: number;
  meals_num_husband: number;
  meals_num_bride: number;
  present: string;
  present_price: number;
  present_num_husband: number;
  present_num_bride: number;
  reserve: string;
  reserve_pay: number;
  cost_husband: number;
  cost_bride: number;
  meal_husband: number;
  meal_bride: number;
  present_husband: number;
  present_bride: number;
  reserve_husband: number;
  reserve_bride: number;
}

export interface RemoveWeddingMutationArgs {
  id: string;
}

export interface UpdateWeddingMutationArgs {
  id: string;
  husband_name: string;
  bride_name: string;
  wedding_at: string;
  event_at: string;
  company_husband: number;
  company_bride: number;
  rooftop_husband: number;
  rooftop_bride: number;
  owner_woman_husband: number;
  owner_woman_bride: number;
  owner_man_husband: number;
  owner_man_bride: number;
  select_husband: number;
  select_bride: number;
  frame_husband: number;
  frame_bride: number;
  dress_husband: number;
  dress_bride: number;
  hairpin_husband: number;
  hairpin_bride: number;
  wig_husband: number;
  wig_bride: number;
  video_husband: number;
  video_bride: number;
  etc_husband: number;
  etc_bride: number;
  rental_husband: number;
  rental_bride: number;
  sword_husband: number;
  sword_bride: number;
  glove_husband: number;
  glove_bride: number;
  bouquet_husband: number;
  bouquet_bride: number;
  ceremony_husband: number;
  ceremony_bride: number;
  play_husband: number;
  play_bride: number;
  anthem_husband: number;
  anthem_bride: number;
  moderator_husband: number;
  moderator_bride: number;
  officiate_husband: number;
  officiate_bride: number;
  hanbok_pre_husband: number;
  hanbok_pre_bride: number;
  hanbok_post_husband: number;
  hanbok_post_bride: number;
  meals: string;
  meals_price: number;
  meals_num_husband: number;
  meals_num_bride: number;
  present: string;
  present_price: number;
  present_num_husband: number;
  present_num_bride: number;
  reserve: string;
  reserve_pay: number;
  cost_husband: number;
  cost_bride: number;
  meal_husband: number;
  meal_bride: number;
  present_husband: number;
  present_bride: number;
  reserve_husband: number;
  reserve_bride: number;
}

export interface ChangePasswordResponse {
  ok: boolean;
  error: string | null;
}

export interface LoginResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface RegisterResponse {
  ok: boolean;
  error: string | null;
}

export interface AddBillResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveBillResponse {
  ok: boolean;
  error: string | null;
}

export interface RestoreBillResponse {
  ok: boolean;
  error: string | null;
}

export interface AddCartResponse {
  ok: boolean;
  error: string | null;
  cart: Cart | null;
}

export interface RemoveCartResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveOneResponse {
  ok: boolean;
  error: string | null;
}

export interface InputUser {
  username: string;
  closed_date: Array<string> | null;
}

export interface AddClosedResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveClosedResponse {
  ok: boolean;
  error: string | null;
}

export interface AddItemResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveItemResponse {
  ok: boolean;
  error: string | null;
}

export interface UpdateItemResponse {
  ok: boolean;
  error: string | null;
}

export interface AddReserveResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveReserveResponse {
  ok: boolean;
  error: string | null;
}

export interface InitPasswordResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveUserResponse {
  ok: boolean;
  error: string | null;
}

export interface SetAdminResponse {
  ok: boolean;
  error: string | null;
}

export interface SetEmployeeResponse {
  ok: boolean;
  error: string | null;
}

export interface AddWeddingResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveWeddingResponse {
  ok: boolean;
  error: string | null;
}

export interface UpdateWeddingResponse {
  ok: boolean;
  error: string | null;
}
