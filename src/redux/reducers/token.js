import { TOKEN_ACTIONS } from "../constants/token";

const initialState = {
  token: "",
};

export const tokenReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOKEN_ACTIONS.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };

    default:
      return state;
  }
};
