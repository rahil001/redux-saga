import { IMAGES_LOADED } from "../constants/actions";
import { Item } from "../types";

interface Action {
  type: string;
  payload: Item[];
}

const DEFAULT_STATE: string[] = [];

export default function images(state = DEFAULT_STATE, action: Action) {
  switch (action.type) {
    case IMAGES_LOADED:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
