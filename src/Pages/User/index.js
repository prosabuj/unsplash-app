import React, { useContext, useEffect } from "react";
import UserContext from "../../Context/CreateContext/UserContext";
import UserComponent from "../../Components/User";
import Loader from "../../Components/Regular/Loader";

const User = ({ match }) => {
  const userContext = useContext(UserContext);
  const { getUser, getUserPhotos, user, loading, userphotos } = userContext;

  useEffect(() => {
    getUser(match.params.username);
    userphotos.length = 0;
    getUserPhotos(match.params.username);
    // eslint-disable-next-line
  }, []);

  const isEmpty = Object.keys(user).length === 0 && user.constructor === Object;

  if (loading) {
    return <Loader />;
  } else if (!isEmpty) {
    return (
      <UserComponent
        user={user}
        getUserPhotos={getUserPhotos}
        query={match.params.username}
        userphotos={userphotos}
        loading={loading}
      />
    );
  } else {
    return (
      <div className="text-center">
        <h2>User Not Found</h2>
        <p>Please Go Back to Homepage</p>
      </div>
    );
  }
};

export default User;
