import React from "react";

const User = ({ user }) => {
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
            <i className="fas fa-map-marker-alt" /> {user.location}
            <i className="fas fa-link" /> {user.portfolio_url}
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
    </div>
  );
};

export default User;
