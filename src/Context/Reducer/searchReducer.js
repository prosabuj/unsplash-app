import {
  GET_SEARCH_ALL,
  GET_SEARCH,
  SEARCH_ERROR,
  CLEAR_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_SEARCH_ALL:
      return {
        ...state,
        unsplashsall: action.payload,
        loading: false
      };
    case GET_SEARCH:
      return {
        ...state,
        unsplashs: [...state.unsplashs, ...action.payload],
        loading: false
      };
    case SEARCH_ERROR:
      return {
        ...state,
        error: "Something Went Wrong, Please Reload This Page",
        loading: false
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
