import React, { useReducer } from "react";
import UniversalContext from "../CreateContext/UniversalContext";
import universalReducer from "../Reducer/universalReducer";
import API from "../../api";
import { GET_SINGLE_IMAGE, SINGLE_IMAGE_ERROR, CLEAR_ERROR } from "../types";

const UniversalState = props => {
  const initialState = {
    unsplash: {},
    loading: true,
    error: false
  };

  const [state, dispatch] = useReducer(universalReducer, initialState);

  // get Single Image
  const getSingleImage = async imageId => {
    try {
      const response = await API.get(`/photos/${imageId}`);
      dispatch({ type: GET_SINGLE_IMAGE, payload: response.data });
    } catch (err) {
      dispatch({ type: SINGLE_IMAGE_ERROR, payload: err.message });

      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 5000);
    }
  };

  return (
    <UniversalContext.Provider
      value={{
        unsplash: state.unsplash,
        loading: state.loading,
        error: state.error,
        getSingleImage
      }}
    >
      {props.children}
    </UniversalContext.Provider>
  );
};

export default UniversalState;
