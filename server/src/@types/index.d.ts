export const typeDefs = ["type ChangePasswordResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  ChangePassword(password: String!): ChangePasswordResponse!\n  Login(username: String!, password: String!): LoginResponse!\n  Register(username: String!, password: String!): RegisterResponse!\n  AddBill(title: String!, hall: String!, etc: String!): AddBillResponse!\n  RemoveBill(id: ID!): RemoveBillResponse!\n  RestoreBill(id: ID!): RestoreBillResponse!\n  AddCart(item_id: ID!, count: Int!, price: Int!): AddCartResponse!\n  RemoveCart: RemoveCartResponse!\n  RemoveOne(item_id: ID!): RemoveOneResponse!\n  AddClosed(year: String!, month: String!, users: [InputUser]!): AddClosedResponse!\n  RemoveClosed(id: ID!): RemoveClosedResponse!\n  AddItem(name: String!, divide: String!, native: String!, unit: String!, price: Int!): AddItemResponse!\n  RemoveItem(id: ID!): RemoveItemResponse!\n  UpdateItem(id: ID!, name: String, divide: String, native: String, unit: String, price: Int): UpdateItemResponse!\n  AddReserve(bill_id: ID!, reserve: Int!): AddReserveResponse!\n  RemoveReserve(id: ID!): RemoveReserveResponse!\n  InitPassword(id: ID!): InitPasswordResponse!\n  RemoveUser(id: ID!): RemoveUserResponse!\n  SetAdmin(id: ID!): SetAdminResponse!\n  SetEmployee(id: ID!): SetEmployeeResponse!\n  AddWedding(husband: String!, husband_rental: Int!, husband_company: Int!, husband_add: Int!, husband_today: Int!, husband_bouquet: Int!, husband_ceremony: Int!, husband_hanbok: Int!, husband_play: Int!, husband_anthem: Int!, husband_moderator: Int!, husband_officiate: Int!, husband_etc: Int!, husband_conv: Int!, husband_wedding: Int!, husband_num: Int!, husband_meal: Int!, husband_present_num: Int!, husband_present: Int!, husband_reserve: Int!, bride: String!, bride_rental: Int!, bride_company: Int!, bride_add: Int!, bride_today: Int!, bride_bouquet: Int!, bride_ceremony: Int!, bride_hanbok: Int!, bride_play: Int!, bride_anthem: Int!, bride_moderator: Int!, bride_officiate: Int!, bride_etc: Int!, bride_conv: Int!, bride_wedding: Int!, bride_num: Int!, bride_meal: Int!, bride_present_num: Int!, bride_present: Int!, bride_reserve: Int!, sum_rental: Int!, sum_company: Int!, sum_add: Int!, sum_today: Int!, sum_bouquet: Int!, sum_ceremony: Int!, sum_hanbok: Int!, sum_play: Int!, sum_anthem: Int!, sum_moderator: Int!, sum_officiate: Int!, sum_etc: Int!, sum_conv: Int!, sum_wedding: Int!, sum_num: Int!, sum_meal: Int!, sum_present_num: Int!, sum_present: Int!, reserve_pay: Int!, meals_price: Int!, present_price: Int!, meal: String!, reserve: String!, present: String!, wedding_at: String!, event_at: String!): AddWeddingResponse!\n  RemoveWedding(id: ID!): RemoveWeddingResponse!\n  UpdateWedding(id: ID!, husband: String!, husband_rental: Int!, husband_company: Int!, husband_add: Int!, husband_today: Int!, husband_bouquet: Int!, husband_ceremony: Int!, husband_hanbok: Int!, husband_play: Int!, husband_anthem: Int!, husband_moderator: Int!, husband_officiate: Int!, husband_etc: Int!, husband_conv: Int!, husband_wedding: Int!, husband_num: Int!, husband_meal: Int!, husband_present_num: Int!, husband_present: Int!, husband_reserve: Int!, bride: String!, bride_rental: Int!, bride_company: Int!, bride_add: Int!, bride_today: Int!, bride_bouquet: Int!, bride_ceremony: Int!, bride_hanbok: Int!, bride_play: Int!, bride_anthem: Int!, bride_moderator: Int!, bride_officiate: Int!, bride_etc: Int!, bride_conv: Int!, bride_wedding: Int!, bride_num: Int!, bride_meal: Int!, bride_present_num: Int!, bride_present: Int!, bride_reserve: Int!, sum_rental: Int!, sum_company: Int!, sum_add: Int!, sum_today: Int!, sum_bouquet: Int!, sum_ceremony: Int!, sum_hanbok: Int!, sum_play: Int!, sum_anthem: Int!, sum_moderator: Int!, sum_officiate: Int!, sum_etc: Int!, sum_conv: Int!, sum_wedding: Int!, sum_num: Int!, sum_meal: Int!, sum_present_num: Int!, sum_present: Int!, reserve_pay: Int!, meals_price: Int!, present_price: Int!, meal: String!, reserve: String!, present: String!, wedding_at: String!, event_at: String!): UpdateWeddingResponse!\n}\n\ntype LoginResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype MeResponse {\n  ok: Boolean!\n  error: String\n  me: MeType\n}\n\ntype Query {\n  Me: MeResponse!\n  ListBills(cursor: ID, user_id: ID, title: String, hall: String): ListBillsResponse!\n  ReadBill(id: ID!): ReadBillResponse!\n  ViewCart: ViewCartResponse!\n  ListCloseds(cursor: ID): ListClosedsResponse!\n  ReadClosed(id: ID!): ReadClosedResponse!\n  ListItems(cursor: ID, name: String, divide: String, native: String): ListItemsResponse!\n  ReadItem(id: ID!): ReadItemResponse!\n  ListUsers(username: String, cursor: ID): ListUsersResponse!\n  ReadUser(id: ID!): ReadUserResponse!\n  ListWeddings(date: String, cursor: ID): ListWeddingsResponse!\n  ReadWedding(id: ID!): ReadWeddingResponse!\n}\n\ntype RegisterResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddBillResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListBillsResponse {\n  ok: Boolean!\n  error: String\n  bills: [Bill]\n}\n\ntype ReadBillResponse {\n  ok: Boolean!\n  error: String\n  bill: Bill\n}\n\ntype RemoveBillResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype RestoreBillResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddCartResponse {\n  ok: Boolean!\n  error: String\n  cart: Cart\n}\n\ntype RemoveCartResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype RemoveOneResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ViewCartResponse {\n  ok: Boolean!\n  error: String\n  cart: Cart\n}\n\ntype AddClosedResponse {\n  ok: Boolean!\n  error: String\n}\n\ninput InputUser {\n  username: String!\n  closed_date: [String]\n}\n\ntype ListClosedsResponse {\n  ok: Boolean!\n  error: String\n  closeds: [Closed]\n}\n\ntype ReadClosedResponse {\n  ok: Boolean!\n  error: String\n  closed: Closed\n  closed_users: [ClosedUser]\n}\n\ntype RemoveClosedResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddItemResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListItemsResponse {\n  ok: Boolean!\n  error: String\n  items: [Item]\n}\n\ntype ReadItemResponse {\n  ok: Boolean!\n  error: String\n  item: Item\n}\n\ntype RemoveItemResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype UpdateItemResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddReserveResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype RemoveReserveResponse {\n  ok: Boolean!\n  error: String\n}\n\nscalar Date\n\ntype Closed {\n  id: ID!\n  year: String!\n  month: String!\n  closed_users: [ClosedUser]\n  created_at: Date!\n}\n\ntype ClosedUser {\n  id: ID!\n  username: String!\n  closed_date: [String]\n  closedId: ID!\n  closed: Closed\n  created_at: Date!\n}\n\ntype User {\n  id: ID!\n  username: String!\n  password: String!\n  admin: Boolean!\n  created_at: Date!\n  updated_at: Date\n}\n\ntype MeType {\n  id: ID!\n  username: String!\n  admin: Boolean!\n}\n\ntype InputItem {\n  id: ID!\n  name: String!\n  divide: String!\n  native: String!\n  unit: String!\n  price: Int!\n  count: Int!\n  amount: Int!\n}\n\ntype Item {\n  id: ID!\n  num: Int!\n  name: String!\n  divide: String!\n  native: String!\n  unit: String!\n  price: Int!\n  created_at: Date!\n  updated_at: Date\n}\n\ntype Cart {\n  id: ID!\n  items: [InputItem]!\n  completed: Boolean!\n  deleted: Boolean!\n  created_at: Date!\n  updated_at: Date\n  user_id: String!\n  bill_id: String\n}\n\ntype Bill {\n  id: ID!\n  title: String!\n  hall: String!\n  etc: String!\n  total_amount: Int!\n  items: [InputItem]\n  reserve: Int\n  username: String!\n  user_id: String!\n  cart_id: String!\n  created_at: Date!\n}\n\ntype Wedding {\n  id: ID!\n  husband: String!\n  husband_rental: Int!\n  husband_company: Int!\n  husband_add: Int!\n  husband_today: Int!\n  husband_bouquet: Int!\n  husband_ceremony: Int!\n  husband_hanbok: Int!\n  husband_play: Int!\n  husband_anthem: Int!\n  husband_moderator: Int!\n  husband_officiate: Int!\n  husband_etc: Int!\n  husband_conv: Int!\n  husband_wedding: Int!\n  husband_num: Int!\n  husband_meal: Int!\n  husband_present_num: Int!\n  husband_present: Int!\n  husband_reserve: Int!\n  bride: String!\n  bride_rental: Int!\n  bride_company: Int!\n  bride_add: Int!\n  bride_today: Int!\n  bride_bouquet: Int!\n  bride_ceremony: Int!\n  bride_hanbok: Int!\n  bride_play: Int!\n  bride_anthem: Int!\n  bride_moderator: Int!\n  bride_officiate: Int!\n  bride_etc: Int!\n  bride_conv: Int!\n  bride_wedding: Int!\n  bride_num: Int!\n  bride_meal: Int!\n  bride_present_num: Int!\n  bride_present: Int!\n  bride_reserve: Int!\n  sum_rental: Int!\n  sum_company: Int!\n  sum_add: Int!\n  sum_today: Int!\n  sum_bouquet: Int!\n  sum_ceremony: Int!\n  sum_hanbok: Int!\n  sum_play: Int!\n  sum_anthem: Int!\n  sum_moderator: Int!\n  sum_officiate: Int!\n  sum_etc: Int!\n  sum_conv: Int!\n  sum_wedding: Int!\n  sum_num: Int!\n  sum_meal: Int!\n  sum_present_num: Int!\n  sum_present: Int!\n  reserve_pay: Int!\n  meals_price: Int!\n  present_price: Int!\n  meal: String!\n  reserve: String!\n  present: String!\n  wedding_at: String!\n  event_at: String!\n  created_at: Date!\n  updated_at: Date\n  user_id: String!\n}\n\ntype InitPasswordResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListUsersResponse {\n  ok: Boolean!\n  error: String\n  users: [User]\n}\n\ntype ReadUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype RemoveUserResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype SetAdminResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype SetEmployeeResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddWeddingResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListWeddingsResponse {\n  ok: Boolean!\n  error: String\n  weddings: [Wedding]\n}\n\ntype ReadWeddingResponse {\n  ok: Boolean!\n  error: String\n  wedding: Wedding\n}\n\ntype RemoveWeddingResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype UpdateWeddingResponse {\n  ok: Boolean!\n  error: String\n  wedding: Wedding\n}\n"];
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
  husband: string;
  husband_rental: number;
  husband_company: number;
  husband_add: number;
  husband_today: number;
  husband_bouquet: number;
  husband_ceremony: number;
  husband_hanbok: number;
  husband_play: number;
  husband_anthem: number;
  husband_moderator: number;
  husband_officiate: number;
  husband_etc: number;
  husband_conv: number;
  husband_wedding: number;
  husband_num: number;
  husband_meal: number;
  husband_present_num: number;
  husband_present: number;
  husband_reserve: number;
  bride: string;
  bride_rental: number;
  bride_company: number;
  bride_add: number;
  bride_today: number;
  bride_bouquet: number;
  bride_ceremony: number;
  bride_hanbok: number;
  bride_play: number;
  bride_anthem: number;
  bride_moderator: number;
  bride_officiate: number;
  bride_etc: number;
  bride_conv: number;
  bride_wedding: number;
  bride_num: number;
  bride_meal: number;
  bride_present_num: number;
  bride_present: number;
  bride_reserve: number;
  sum_rental: number;
  sum_company: number;
  sum_add: number;
  sum_today: number;
  sum_bouquet: number;
  sum_ceremony: number;
  sum_hanbok: number;
  sum_play: number;
  sum_anthem: number;
  sum_moderator: number;
  sum_officiate: number;
  sum_etc: number;
  sum_conv: number;
  sum_wedding: number;
  sum_num: number;
  sum_meal: number;
  sum_present_num: number;
  sum_present: number;
  reserve_pay: number;
  meals_price: number;
  present_price: number;
  meal: string;
  reserve: string;
  present: string;
  wedding_at: string;
  event_at: string;
  created_at: Date;
  updated_at: Date | null;
  user_id: string;
}

export interface ReadWeddingResponse {
  ok: boolean;
  error: string | null;
  wedding: Wedding | null;
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
  husband: string;
  husband_rental: number;
  husband_company: number;
  husband_add: number;
  husband_today: number;
  husband_bouquet: number;
  husband_ceremony: number;
  husband_hanbok: number;
  husband_play: number;
  husband_anthem: number;
  husband_moderator: number;
  husband_officiate: number;
  husband_etc: number;
  husband_conv: number;
  husband_wedding: number;
  husband_num: number;
  husband_meal: number;
  husband_present_num: number;
  husband_present: number;
  husband_reserve: number;
  bride: string;
  bride_rental: number;
  bride_company: number;
  bride_add: number;
  bride_today: number;
  bride_bouquet: number;
  bride_ceremony: number;
  bride_hanbok: number;
  bride_play: number;
  bride_anthem: number;
  bride_moderator: number;
  bride_officiate: number;
  bride_etc: number;
  bride_conv: number;
  bride_wedding: number;
  bride_num: number;
  bride_meal: number;
  bride_present_num: number;
  bride_present: number;
  bride_reserve: number;
  sum_rental: number;
  sum_company: number;
  sum_add: number;
  sum_today: number;
  sum_bouquet: number;
  sum_ceremony: number;
  sum_hanbok: number;
  sum_play: number;
  sum_anthem: number;
  sum_moderator: number;
  sum_officiate: number;
  sum_etc: number;
  sum_conv: number;
  sum_wedding: number;
  sum_num: number;
  sum_meal: number;
  sum_present_num: number;
  sum_present: number;
  reserve_pay: number;
  meals_price: number;
  present_price: number;
  meal: string;
  reserve: string;
  present: string;
  wedding_at: string;
  event_at: string;
}

export interface RemoveWeddingMutationArgs {
  id: string;
}

export interface UpdateWeddingMutationArgs {
  id: string;
  husband: string;
  husband_rental: number;
  husband_company: number;
  husband_add: number;
  husband_today: number;
  husband_bouquet: number;
  husband_ceremony: number;
  husband_hanbok: number;
  husband_play: number;
  husband_anthem: number;
  husband_moderator: number;
  husband_officiate: number;
  husband_etc: number;
  husband_conv: number;
  husband_wedding: number;
  husband_num: number;
  husband_meal: number;
  husband_present_num: number;
  husband_present: number;
  husband_reserve: number;
  bride: string;
  bride_rental: number;
  bride_company: number;
  bride_add: number;
  bride_today: number;
  bride_bouquet: number;
  bride_ceremony: number;
  bride_hanbok: number;
  bride_play: number;
  bride_anthem: number;
  bride_moderator: number;
  bride_officiate: number;
  bride_etc: number;
  bride_conv: number;
  bride_wedding: number;
  bride_num: number;
  bride_meal: number;
  bride_present_num: number;
  bride_present: number;
  bride_reserve: number;
  sum_rental: number;
  sum_company: number;
  sum_add: number;
  sum_today: number;
  sum_bouquet: number;
  sum_ceremony: number;
  sum_hanbok: number;
  sum_play: number;
  sum_anthem: number;
  sum_moderator: number;
  sum_officiate: number;
  sum_etc: number;
  sum_conv: number;
  sum_wedding: number;
  sum_num: number;
  sum_meal: number;
  sum_present_num: number;
  sum_present: number;
  reserve_pay: number;
  meals_price: number;
  present_price: number;
  meal: string;
  reserve: string;
  present: string;
  wedding_at: string;
  event_at: string;
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
  wedding: Wedding | null;
}
