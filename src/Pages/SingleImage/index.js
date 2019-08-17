import React, { useContext, useEffect } from "react";
import UniversalContext from "../../Context/CreateContext/UniversalContext";
import SingleImageComponent from "../../Components/SingleImage";
import Loader from "../../Components/Regular/Loader";

const User = ({ match }) => {
  const universalContext = useContext(UniversalContext);
  const { getSingleImage, unsplash, loading } = universalContext;

  useEffect(() => {
    getSingleImage(match.params.id);
    // eslint-disable-next-line
  }, []);

  const isEmpty =
    Object.keys(unsplash).length === 0 && unsplash.constructor === Object;

  if (loading) {
    return <Loader />;
  } else if (!isEmpty) {
    return <SingleImageComponent unsplash={unsplash} />;
  } else {
    return (
      <div className="text-center">
        <h2>Photo Not Found</h2>
        <p>Please Go Back to Homepage</p>
      </div>
    );
  }
};

export default User;
