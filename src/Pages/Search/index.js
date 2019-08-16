import React, { useContext } from "react";
import SearchComponent from "../../Components/Search";
import SearchContext from "../../Context/CreateContext/SearchContext";

const Search = ({ match }) => {
  const searchContext = useContext(SearchContext);
  const { unsplashsall } = searchContext;

  const query = match.params.query;

  return (
    <div>
      <h1>{query.replace("-", " ").trim()} Pictures</h1>
      <p>
        {unsplashsall.total} free {query.replace("-", " ")} pictures
      </p>
      <p>Total Page: {unsplashsall.total_pages}</p>
      <SearchComponent query={query} />
    </div>
  );
};

export default Search;
