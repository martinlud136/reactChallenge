import { ACTION_TYPES } from "./action.types";

export const INITIAL_STATE = {
  fetching: false,
  post: [],
  error: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        fetching: true,
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        fetching: false,
        error: false,
        post: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        error: true,
        fetching: false,
      };
    default:
      return state;
  }
};
