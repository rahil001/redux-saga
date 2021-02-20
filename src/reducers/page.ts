import { FETCH_IMAGES } from "../constants/actions";

interface Action {
  type: string;
}

const DEFAULT_STATE: number = 1;

export default function page(state = DEFAULT_STATE, action: Action) {
  switch (action.type) {
    case FETCH_IMAGES:
      return state + 1;
    default:
      return state;
  }
}
