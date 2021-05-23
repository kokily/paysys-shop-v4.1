interface MeType {
  id: string;
  username: string;
  admin: boolean;
}

interface UserType {
  id: string;
  username: string;
  admin: boolean;
  created_at: string;
}

interface MenuType {
  id: string;
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: number;
}

interface HomeMenuType {
  id: number;
  divide: string;
}

interface ItemType {
  id: string;
  num: number;
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: number;
  count: number;
  amount: number;
}

interface CartType {
  id: string;
  user_id: string;
  completed: boolean;
  deleted: boolean;
  bill_id: string;
  items: ItemType[] | null;
}

interface BillType {
  id: string;
  title: string;
  hall: string;
  etc: string;
  total_amount: number;
  items: ItemType[];
  reserve?: number;
  username: string;
  user_id: string;
  cart_id: string;
  created_at: string;
}

interface SavingWedding {
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
  husband_num: number;
  husband_present_num: number;
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
  bride_num: number;
  bride_present_num: number;
  meals_price: number;
  reserve_pay: number;
  present_price: number;
  meal: string;
  reserve: string;
  present: string;
  wedding_at: Date;
  event_at: string;
}

interface WeddingType extends SavingWedding {
  id: string;
  husband_wedding: number;
  husband_meal: number;
  husband_present: number;
  husband_reserve: number;
  bride_wedding: number;
  bride_meal: number;
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
  created_at: Date;
  updated_at: Date;
  user_id: string;
}

interface ExpenseType {
  husband: string;
  husband_rental: string;
  husband_company: string;
  husband_add: string;
  husband_today: string;
  husband_bouquet: string;
  husband_ceremony: string;
  husband_hanbok: string;
  husband_play: string;
  husband_anthem: string;
  husband_moderator: string;
  husband_officiate: string;
  husband_etc: string;
  husband_conv: string;
  husband_wedding: string;
  husband_num: string;
  husband_meal: string;
  husband_present_num: string;
  husband_present: string;
  bride: string;
  bride_rental: string;
  bride_company: string;
  bride_add: string;
  bride_today: string;
  bride_bouquet: string;
  bride_ceremony: string;
  bride_hanbok: string;
  bride_play: string;
  bride_anthem: string;
  bride_moderator: string;
  bride_officiate: string;
  bride_etc: string;
  bride_conv: string;
  bride_wedding: string;
  bride_num: string;
  bride_meal: string;
  bride_present_num: string;
  bride_present: string;
  sum_rental: string;
  sum_company: string;
  sum_add: string;
  sum_today: string;
  sum_bouquet: string;
  sum_ceremony: string;
  sum_hanbok: string;
  sum_play: string;
  sum_anthem: string;
  sum_moderator: string;
  sum_officiate: string;
  sum_etc: string;
  sum_conv: string;
  sum_wedding: string;
  sum_num: string;
  sum_meal: string;
  sum_present_num: string;
  sum_present: string;
  reserve_pay: string;
  meals_price: string;
  present_price: string;
  meal: string;
  reserve: string;
  present: string;
  event_at: string;
}

interface UpdateType extends ExpenseType {
  wedding_at: Date;
}

interface ClosedUserType {
  id: string;
  username: string;
  closed_date: string[] | null;
  closedId: string;
  closed: ClosedType;
  created_at: string;
}

interface ClosedType {
  id: string;
  year: string;
  month: string;
  closed_users: ClosedUserType[] | null;
  created_at: string;
}

interface ClosedUserState {
  username: string;
  closed_date: string[];
}
