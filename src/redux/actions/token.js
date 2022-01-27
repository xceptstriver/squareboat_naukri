import { TOKEN_ACTIONS } from "../constants/token";

export const setToken = (token) => {
  return {
    type: TOKEN_ACTIONS.SET_TOKEN,
    payload: token,
  };
};
