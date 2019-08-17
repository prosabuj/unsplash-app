import React, { useReducer } from "react";
import SearchContext from "../CreateContext/SearchContext";
import searchReducer from "../Reducer/searchReducer";
import API from "../../api";
import {
  GET_SEARCH_ALL,
  GET_SEARCH,
  SEARCH_ERROR,
  CLEAR_ERROR
} from "../types";

const SearchState = props => {
  const initialState = {
    unsplashsall: {},
    unsplashs: [],
    loading: true,
    error: false
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  //  get Search Unsplash
  const getSearch = async (searchQuery, page = 1, per_page = 6) => {
    try {
      const response = await API.get(
        `/search/photos/?query=${searchQuery}&page=${page}&per_page=${per_page}`
      );
      dispatch({ type: GET_SEARCH_ALL, payload: response.data });
      dispatch({ type: GET_SEARCH, payload: response.data.results });
    } catch (err) {
      dispatch({ type: SEARCH_ERROR });

      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 5000);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        unsplashsall: state.unsplashsall,
        unsplashs: state.unsplashs,
        loading: state.loading,
        error: state.error,
        getSearch
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
