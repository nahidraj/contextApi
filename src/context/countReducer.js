import { DECREMENT, INCREMENT, RESET } from "./actions";

export const countReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    case RESET:
      return 0;
    default:
      return state;
  }
};
