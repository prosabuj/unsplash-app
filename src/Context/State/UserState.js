import React, { useReducer } from "react";
import UserContext from "../CreateContext/UserContext";
import userReducer from "../Reducer/userReducer";
import API from "../../api";
import { GET_USER, USER_ERROR, GET_USER_PHOTOS, CLEAR_ERROR } from "../types";

const UserState = ({ children }) => {
  const initialState = {
    user: {},
    userphotos: [],
    loading: true,
    error: false
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // get Single User
  const getUser = async userName => {
    try {
      const response = await API.get(`/users/${userName}`);
      dispatch({ type: GET_USER, payload: response.data });
    } catch (err) {
      dispatch({ type: USER_ERROR });

      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 5000);
    }
  };

  // get User Photos
  const getUserPhotos = async (userName, page = 1, take = 6) => {
    try {
      const response = await API.get(
        `/users/${userName}/photos/?page=${page}&per_page=${take}`
      );
      dispatch({ type: GET_USER_PHOTOS, payload: response.data });
    } catch (err) {
      dispatch({ type: USER_ERROR });

      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 5000);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        userphotos: state.userphotos,
        loading: state.loading,
        error: state.error,
        getUser,
        getUserPhotos
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
