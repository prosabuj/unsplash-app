import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");

  const searchInput = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    setSearch("");
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            value={search}
            className="form-control"
            onChange={searchInput}
            placeholder="Search Photos"
          />
          <Link to={`/search/photos/${search.replace(/\s+/g, "-").trim()}`}>
            <div className="input-group-append">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Search;
