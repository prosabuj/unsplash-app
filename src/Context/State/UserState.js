import React, { useReducer } from "react";
import UserContext from "../CreateContext/UserContext";
import userReducer from "../Reducer/userReducer";
import API from "../../api";
import { GET_USER, USER_ERROR, CLEAR_ERROR } from "../types";

const UserState = ({ children }) => {
  const initialState = {
    user: {},
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
      dispatch({ type: USER_ERROR, payload: err.message });

      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 5000);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        getUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
