import React from "react";
import Unsplash from "../../Components/Unsplash";
import SearchBox from "../../Components/Regular/SearchBox";

const Home = () => {
  return (
    <div>
      <h1 className="text-center my-5">Unsplash App</h1>
      <SearchBox />
      <Unsplash />
    </div>
  );
};

export default Home;
