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
  wedding_at: string;
  event_at: string;
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
  reserve_husband: number;
  reserve_bride: number;
  weddingId: string;
}