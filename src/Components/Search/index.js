import React, { useContext, useEffect } from "react";
import SearchContext from "../../Context/CreateContext/SearchContext";
import Pagination from "../../Utils/Pagination";
import Loader from "../../Components/Regular/Loader";

const Search = ({ query }) => {
  const searchContext = useContext(SearchContext);

  const { getSearch, unsplashs, unsplashsall, loading, error } = searchContext;

  useEffect(() => {
    unsplashs.length = 0;
    getSearch(query);

    // eslint-disable-next-line
  }, []);

  const hasMoreGen = unsplashsall.total <= unsplashs.length ? false : true;

  return (
    <div>
      {error && <h1>{error}</h1>}
      {loading ? (
        <Loader />
      ) : (
        <Pagination
          images={unsplashs}
          query={query}
          nextPage={getSearch}
          hasMore={hasMoreGen}
        />
      )}
    </div>
  );
};

export default Search;
