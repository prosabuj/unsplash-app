import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AfterHover = ({ ImageData }) => {
  return (
    <Fragment>
      <Link to={`/@${ImageData.user.username}`}>
        <div className="uploader-small-avatar">
          <img
            src={ImageData.user.profile_image.small}
            alt={ImageData.user.name}
            style={{ borderRadius: "50% 50%" }}
          />
        </div>
        <div className="uploader-avatar-name">
          <p>{ImageData.user.name}</p>
        </div>
      </Link>
      <div className="image-download-button">
        <p>
          <a href={`${ImageData.links.download}?force=true`} rel="nofollow">
            Download
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default AfterHover;
