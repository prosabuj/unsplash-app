import { GET_USER, GET_USER_PHOTOS, USER_ERROR, CLEAR_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case GET_USER_PHOTOS:
      return {
        ...state,
        userphotos: [...state.userphotos, ...action.payload],
        loading: false
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Something Went Wrong, Please Reload This Page'
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
