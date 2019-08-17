import { GET_USER, USER_ERROR, CLEAR_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
        loading: false
      };
    default:
      return state;
  }
};
