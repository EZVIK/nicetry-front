import nightwind from "nightwind/helper";

export const type = {
  TOGGLE_DARK: "TOGGLE_DARK",
  AUTH_JWT_TOKEN: "AUTHORIZATION"
};


export const authorization = (token) => {
  return {
    type: type.AUTH_JWT_TOKEN,
    token
  };
};

export const toggleDark = (dark) => {
  nightwind.toggle();
  return {
    type: type.TOGGLE_DARK,
    dark
  };
};

