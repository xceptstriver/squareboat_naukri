import { AUTH_ACTIONS } from "../constants/auth";

const initialState = {
  auth: {},
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_ACTIONS.SET_AUTH:
      return {
        ...state,
        auth: { ...payload },
      };

    default:
      return state;
  }
};
