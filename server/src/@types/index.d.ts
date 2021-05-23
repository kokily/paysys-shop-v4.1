export const typeDefs = ["type ChangePasswordResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  ChangePassword(password: String!): ChangePasswordResponse!\n  Login(username: String!, password: String!): LoginResponse!\n  Register(username: String!, password: String!): RegisterResponse!\n  AddClosed(year: String!, month: String!, users: [InputUser]!): AddClosedResponse!\n  RemoveClosed(id: ID!): RemoveClosedResponse!\n}\n\ntype LoginResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype MeResponse {\n  ok: Boolean!\n  error: String\n  me: MeType\n}\n\ntype Query {\n  Me: MeResponse!\n  ListCloseds(cursor: ID): ListClosedsResponse!\n  ReadClosed(id: ID!): ReadClosedResponse!\n}\n\ntype RegisterResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddClosedResponse {\n  ok: Boolean!\n  error: String\n}\n\ninput InputUser {\n  username: String!\n  closed_date: [String]\n}\n\ntype ListClosedsResponse {\n  ok: Boolean!\n  error: String\n  closeds: [Closed]\n}\n\ntype ReadClosedResponse {\n  ok: Boolean!\n  error: String\n  closed: Closed\n}\n\ntype RemoveClosedResponse {\n  ok: Boolean!\n  error: String\n}\n\nscalar Date\n\ntype Closed {\n  id: ID!\n  year: String!\n  month: String!\n  closed_users: [ClosedUser]\n  created_at: Date!\n}\n\ntype ClosedUser {\n  id: ID!\n  username: String!\n  closed_date: [String]\n  closedId: String!\n  closed: Closed\n  created_at: Date!\n}\n\ntype User {\n  id: ID!\n  username: String!\n  password: String!\n  admin: Boolean!\n  created_at: Date!\n  updated_at: Date\n}\n\ntype MeType {\n  id: ID!\n  username: String!\n  admin: Boolean!\n}\n\ntype InputItem {\n  id: ID!\n  name: String!\n  divide: String!\n  native: String!\n  unit: String!\n  price: Int!\n  count: Int!\n  amount: Int!\n}\n\ntype Item {\n  id: ID!\n  num: Int!\n  name: String!\n  divide: String!\n  native: String!\n  unit: String!\n  price: Int!\n  created_at: Date!\n  updated_at: Date\n}\n\ntype Cart {\n  id: ID!\n  items: [InputItem]!\n  completed: Boolean!\n  deleted: Boolean!\n  created_at: Date!\n  updated_at: Date\n  user_id: String!\n  bill_id: String\n}\n\ntype Bill {\n  id: ID!\n  title: String!\n  hall: String!\n  etc: String!\n  total_amount: Int!\n  items: [InputItem]\n  reserve: Int\n  username: String!\n  user_id: String!\n  cart_id: String!\n  created_at: Date!\n}\n\ntype Wedding {\n  id: ID!\n  husband: String!\n  husband_rental: Int!\n  husband_company: Int!\n  husband_add: Int!\n  husband_today: Int!\n  husband_bouquet: Int!\n  husband_ceremony: Int!\n  husband_hanbok: Int!\n  husband_play: Int!\n  husband_anthem: Int!\n  husband_moderator: Int!\n  husband_officiate: Int!\n  husband_etc: Int!\n  husband_conv: Int!\n  husband_wedding: Int!\n  husband_num: Int!\n  husband_meal: Int!\n  husband_present_num: Int!\n  husband_present: Int!\n  husband_reserve: Int!\n  bride: String!\n  bride_rental: Int!\n  bride_company: Int!\n  bride_add: Int!\n  bride_today: Int!\n  bride_bouquet: Int!\n  bride_ceremony: Int!\n  bride_hanbok: Int!\n  bride_play: Int!\n  bride_anthem: Int!\n  bride_moderator: Int!\n  bride_officiate: Int!\n  bride_etc: Int!\n  bride_conv: Int!\n  bride_wedding: Int!\n  bride_num: Int!\n  bride_meal: Int!\n  bride_present_num: Int!\n  bride_present: Int!\n  bride_reserve: Int!\n  sum_rental: Int!\n  sum_company: Int!\n  sum_add: Int!\n  sum_today: Int!\n  sum_bouquet: Int!\n  sum_ceremony: Int!\n  sum_hanbok: Int!\n  sum_play: Int!\n  sum_anthem: Int!\n  sum_moderator: Int!\n  sum_officiate: Int!\n  sum_etc: Int!\n  sum_conv: Int!\n  sum_wedding: Int!\n  sum_num: Int!\n  sum_meal: Int!\n  sum_present_num: Int!\n  sum_present: Int!\n  reserve_pay: Int!\n  meals_price: Int!\n  present_price: Int!\n  meal: String!\n  reserve: String!\n  present: String!\n  wedding_at: String!\n  event_at: String!\n  created_at: Date!\n  updated_at: Date\n  user_id: String!\n}\n"];
/* tslint:disable */

export interface Query {
  Me: MeResponse;
  ListCloseds: ListClosedsResponse;
  ReadClosed: ReadClosedResponse;
}

export interface ListClosedsQueryArgs {
  cursor: string | null;
}

export interface ReadClosedQueryArgs {
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

export type Date = any;

export interface ReadClosedResponse {
  ok: boolean;
  error: string | null;
  closed: Closed | null;
}

export interface Mutation {
  ChangePassword: ChangePasswordResponse;
  Login: LoginResponse;
  Register: RegisterResponse;
  AddClosed: AddClosedResponse;
  RemoveClosed: RemoveClosedResponse;
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

export interface AddClosedMutationArgs {
  year: string;
  month: string;
  users: Array<InputUser>;
}

export interface RemoveClosedMutationArgs {
  id: string;
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

export interface User {
  id: string;
  username: string;
  password: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date | null;
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
