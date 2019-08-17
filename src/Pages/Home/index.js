import React, { Fragment } from "react";
import Unsplash from "../../Components/Unsplash";
import SearchBox from "../../Components/Regular/SearchBox";

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 style={{ color: "#fff" }}>Unsplash</h1>
              <p className="lead" style={{ color: "#fff" }}>
                The internet’s source of freely useable images. Powered by
                creators everywhere.
              </p>
              <SearchBox />
              <p style={{ color: "#fff" }}>
                **This Project is just for Educational Purpose Only
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Unsplash />
    </Fragment>
  );
};

export default Home;
