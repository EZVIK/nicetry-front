import { type } from "./action";

const initState = {
  dark: false,
  volume: 100,
  brightness: 80,
  wifi: true,
  bluetooth: true,
  airdrop: true,
  fullscreen: false
};

export const Reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case type.TOGGLE_DARK:
      return {
        ...state,
        dark: action.dark
      };
    case type.AUTH_JWT_TOKEN:
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
};
