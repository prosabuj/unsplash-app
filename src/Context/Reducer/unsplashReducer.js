import { GET_UNSPLASH, UNSPLASH_ERROR, CLEAR_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_UNSPLASH:
      return {
        ...state,
        unsplashs: [...state.unsplashs, ...action.payload],
        loading: false
      };
    case UNSPLASH_ERROR:
      return {
        ...state,
        loading: false,
        error: "Something Went Wrong, Please Reload This Page"
      };
    case CLEAR_ERROR:
      return {
        ...state,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};
