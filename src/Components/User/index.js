import React from "react";
import Pagination from "../../Utils/Pagination";
import LocationIcon from "../../assets/images/user/location.svg";
import WebIcon from "../../assets/images/user/web.svg";
import Loader from "../Regular/Loader";

const User = ({ user, getUserPhotos, query, loading, userphotos }) => {
  const hasMoreGen = user.total_photos <= userphotos.length ? false : true;
  return (
    <div className=" container mt-5">
      <div className="row">
        <div className="col-md-2 offset-md-2">
          <img
            src={user.profile_image.large}
            alt={user.name}
            className="rounded-circle"
          />
        </div>
        <div className="col-md-8">
          <h2>{user.name}</h2>
          <div className="row user-address">
            <img src={LocationIcon} alt="Location" className="user-icon" />{" "}
            {user.location}
            <img src={WebIcon} alt="Web" className="user-icon" />{" "}
            {user.portfolio_url}
          </div>
          <p className="lead">{user.bio}</p>
          <h4>Interests</h4>
          {user.tags.custom.map((tag, index) => (
            <div key={index}>
              <p
                style={{
                  float: "left",
                  margin: "5px",
                  padding: "1px 4px",
                  background: "gray",
                  color: "white",
                  borderRadius: "2px"
                }}
              >
                {tag.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="offset-sm-2" />
        <div className="col">
          <h5>{user.total_photos} Photos</h5>
        </div>
        <div className="col">
          <h5>{user.total_likes} Liked</h5>
        </div>
        <div className="col">
          <h5>{user.total_collections} Collections</h5>
        </div>
        <div className="offset-sm-5" />
      </div>
      <hr />
      {loading ? (
        <Loader />
      ) : (
        <Pagination
          images={userphotos}
          nextPage={getUserPhotos}
          hasMore={hasMoreGen}
          query={query}
        />
      )}
    </div>
  );
};

export default User;
