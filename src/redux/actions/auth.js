import { AUTH_ACTIONS } from "../constants/auth";

export const setAuth = (authObj) => {
  return {
    type: AUTH_ACTIONS.SET_AUTH,
    payload: authObj,
  };
};
