import React, { useReducer } from "react";
import UnsplashContext from "../CreateContext/UnsplashContext";
import unsplashReducer from "../Reducer/unsplashReducer";
import API from "../../api";
import { GET_UNSPLASH, UNSPLASH_ERROR, CLEAR_ERROR } from "../types";

const UnsplashState = ({ children }) => {
  const initialState = {
    unsplashs: [],
    loading: true,
    error: false
  };

  const [state, dispatch] = useReducer(unsplashReducer, initialState);

  // get Unsplash Photos Fetch
  const getUnsplash = async (page = 1, per_page = 6) => {
    try {
      const response = await API.get(
        `/photos/?per_page=${per_page}&page=${page}`
      );
      dispatch({ type: GET_UNSPLASH, payload: response.data });
    } catch (err) {
      dispatch({ type: UNSPLASH_ERROR });

      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 5000);
    }
  };

  return (
    <UnsplashContext.Provider
      value={{
        unsplashs: state.unsplashs,
        loading: state.loading,
        error: state.error,
        getUnsplash
      }}
    >
      {children}
    </UnsplashContext.Provider>
  );
};

export default UnsplashState;
