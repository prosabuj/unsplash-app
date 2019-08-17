import { GET_SINGLE_IMAGE, SINGLE_IMAGE_ERROR, CLEAR_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_SINGLE_IMAGE:
      return {
        ...state,
        unsplash: action.payload,
        loading: false
      };
    case SINGLE_IMAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
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
