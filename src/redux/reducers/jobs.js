import { JOB_ACTIONS } from "../constants/jobs";

const initialState = {
  jobs: [],
};

export const jobsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case JOB_ACTIONS.SET_JOBS:
      return {
        ...state,
        jobs: [...payload],
      };

    case JOB_ACTIONS.SELECTED_PRODUCT:
      return {
        product: {
          ...payload,
        },
      };

    case JOB_ACTIONS.REMOVE_SELECTED_PRODUCT:
      return {
        product: {},
      };
    default:
      return state;
  }
};
