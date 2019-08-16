import React from "react";

const ImageGrid = ({ image }) => {
  return (
    <div className="col-md-4 col-sm-6 thumb-post image-container">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="img-fluid"
      />
    </div>
  );
};

export default ImageGrid;
