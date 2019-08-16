import React from "react";

const ImageGrid = ({ image }) => {
  return (
    <div className="col-md-4 col-sm-6 grid-item">
      <div className="unsplash-photo" style={{ background: image.color }}>
        <div className="thumbnail-size">
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
