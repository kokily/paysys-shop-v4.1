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

interface WeddingType {
  id: string;
  husband_name: string;
  bride_name: string;
  wedding_at: Date;
  event_at: string;
  cost_husband: number;
  cost_bride: number;
  meal_husband: number;
  meal_bride: number;
  present_husband: number;
  present_bride: number;
  reserve_husband: number;
  reserve_bride: number;
  created_at: string;
  updated_at?: string;
  conventionId: string;
  convention: Convention;
  companyId: string;
  company: CompanyType;
  hanbokId: string;
  hanbok: HanbokType;
  eventId: string;
  event: EventType;
  mealId: string;
  meal: MealType;
  presentId: string;
  present: PresentType;
  reserveId: string;
  reserve: ReserveType;
}

interface CompanyType {
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
}

interface ConventionType {
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
  weddingId: string;
}

interface EventType {
  id: string;
  play_husband: number;
  play_bride: number;
  anthem_husband: number;
  anthem_bride: number;
  moderator_husband: number;
  moderator_bride: number;
  officiate_husband: number;
  officiate_bride: number;
  weddingId: string;
}

interface HanbokType {
  id: string;
  hanbok_pre_husband: number;
  hanbok_pre_bride: number;
  hanbok_post_husband: number;
  hanbok_post_bride: number;
  weddingId: string;
}

interface MealType {
  id: string;
  meals: string;
  meals_price: number;
  meals_num_husband: number;
  meals_num_bride: number;
  weddingId: string;
}

interface PresentType {
  id: string;
  present: string;
  present_price: number;
  present_num_husband: number;
  present_num_bride: number;
  weddingId: string;
}

interface ReserveType {
  id: string;
  reserve: string;
  reserve_pay: number;
  weddingId: string;
}

interface ExpensiveWeddingType {
  husband_name: string;
  bride_name: string;
  wedding_at: Date;
  event_at: string;
  cost_husband?: string;
  cost_bride?: string;
  meal_husband?: string;
  meal_bride?: string;
  present_husband?: string;
  present_bride?: string;
  reserve_husband?: string;
  reserve_bride?: string;
}

interface ExpensiveConventionType {
  rental_husband: string;
  rental_bride: string;
  sword_husband: string;
  sword_bride: string;
  glove_husband: string;
  glove_bride: string;
  bouquet_husband: string;
  bouquet_bride: string;
  ceremony_husband: string;
  ceremony_bride: string;
}

interface ExpensiveCompanyType {
  company_husband: string;
  company_bride: string;
  rooftop_husband: string;
  rooftop_bride: string;
  owner_woman_husband: string;
  owner_woman_bride: string;
  owner_man_husband: string;
  owner_man_bride: string;
  select_husband: string;
  select_bride: string;
  frame_husband: string;
  frame_bride: string;
  dress_husband: string;
  dress_bride: string;
  hairpin_husband: string;
  hairpin_bride: string;
  wig_husband: string;
  wig_bride: string;
  video_husband: string;
  video_bride: string;
  etc_husband: string;
  etc_bride: string;
}

interface ExpensiveHanbokType {
  hanbok_pre_husband: string;
  hanbok_pre_bride: string;
  hanbok_post_husband: string;
  hanbok_post_bride: string;
}

interface ExpensiveEventType {
  play_husband: string;
  play_bride: string;
  anthem_husband: string;
  anthem_bride: string;
  moderator_husband: string;
  moderator_bride: string;
  officiate_husband: string;
  officiate_bride: string;
}

interface ExpensiveMealType {
  meals: string;
  meals_price: string;
  meals_num_husband: string;
  meals_num_bride: string;
}

interface ExpensivePresentType {
  present: string;
  present_price: string;
  present_num_husband: string;
  present_num_bride: string;
}

interface ExpensiveReserveType {
  reserve: string;
  reserve_pay: string;
}
