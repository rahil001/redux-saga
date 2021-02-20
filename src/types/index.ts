export interface Item {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface GlobalState {
  images: Item[];
  page: number;
}
