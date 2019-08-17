import React, { useContext, useEffect } from "react";
import SearchContext from "../../Context/CreateContext/SearchContext";
import Pagination from "../../Utils/Pagination";
import Loader from "../../Components/Regular/Loader";

const Search = ({ query }) => {
  const searchContext = useContext(SearchContext);

  const { getSearch, unsplashs, unsplashsall, loading } = searchContext;

  useEffect(() => {
    unsplashs.length = 0;
    getSearch(query);

    // eslint-disable-next-line
  }, []);

  const hasMoreGen = unsplashsall.total <= unsplashs.length ? false : true;

  if (unsplashs.length === 0) {
    return (
      <div className="text-center">
        <h1>No Match Any Picture</h1>
        <p>Please Search Again</p>
      </div>
    );
  } else {
    return (
      <div>
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
  }
};

export default Search;
