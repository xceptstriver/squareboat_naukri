import { JOB_ACTIONS } from "../constants/jobs";

export const setJobs = (jobs) => {
  return {
    type: JOB_ACTIONS.SET_JOBS,
    payload: jobs,
  };
};

export const selectedProduct = (product) => {
  return {
    type: JOB_ACTIONS.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeselectedProduct = () => {
  return {
    type: JOB_ACTIONS.REMOVE_SELECTED_PRODUCT,
  };
};
