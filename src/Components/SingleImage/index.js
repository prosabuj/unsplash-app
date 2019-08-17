import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SingleImage = ({ unsplash }) => {
  const pulishDate = new Date(unsplash.created_at);

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-4">
          <img
            src={unsplash.user.profile_image.medium}
            alt={unsplash.user.name}
            className="rounded mx-auto d-block "
          />
          <div className="text-center">
            <Link to={`/@${unsplash.user.username}`}>
              <h2>{unsplash.user.name}</h2>
            </Link>
            <p className="lead">{unsplash.user.bio}</p>
          </div>

          <table className="table">
            <tbody>
              <tr>
                <th>Camera Make: </th>
                <td>{unsplash.exif.make}</td>
              </tr>
              <tr>
                <th>Camera Model: </th>
                <td>{unsplash.exif.model}</td>
              </tr>
              <tr>
                <th>Focal Length: </th>
                <td>{unsplash.exif.focal_length}mm</td>
              </tr>
              <tr>
                <th>Aperture: </th>
                <td>ƒ/{unsplash.exif.aperture}</td>
              </tr>
              <tr>
                <th>Shutter Speed: </th>
                <td>{unsplash.exif.exposure_time}s</td>
              </tr>
              <tr>
                <th>ISO: </th>
                <td>{unsplash.exif.iso}</td>
              </tr>
              <tr>
                <th>Dimensions: </th>
                <td>
                  {unsplash.width} × {unsplash.height}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center pb-5">
            <a href={`${unsplash.links.download}?force=true`} rel="nofollow">
              <button type="button" className="btn btn-info">
                Download Image
              </button>
            </a>
          </div>
        </div>
        <div className="col-md-8">
          <div className="text-center">
            <img
              src={unsplash.urls.small}
              alt={unsplash.alt_description}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="row font-weight-bold">
        <div className="col-md-4">
          <p>Publish On {pulishDate.toDateString()}</p>
        </div>
        <div className="col-md-2">
          Views: {unsplash.views} <br />
          Download: {unsplash.downloads}
        </div>
      </div>
    </Fragment>
  );
};

export default SingleImage;
