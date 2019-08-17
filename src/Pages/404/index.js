import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="position-relative overflow-hidden text-center">
        <div className="col-md-8 p-lg-5 mx-auto my-5">
          <h1 className="display-1 font-weight-normal">404</h1>
          <p className="lead font-weight-normal">
            Hm, the page you were looking for doesn't seem to exist anymore.
          </p>
          <Link to="/" className="btn btn-outline-secondary">
            Go Back Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
