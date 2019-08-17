import React, { useState } from "react";
import { Link } from "react-router-dom";
import AfterHover from "./AfterHover";

const ImageGrid = ({ image }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="col-md-4 col-sm-6 grid-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={`/photos/${image.id}`}>
        <div className="unsplash-photo" style={{ background: image.color }}>
          <div className="thumbnail-size">
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="img-fluid"
            />
          </div>
        </div>
      </Link>
      {hover ? <AfterHover ImageData={image} /> : null}
    </div>
  );
};

export default ImageGrid;
