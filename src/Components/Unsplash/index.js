import React, { useContext, useEffect } from "react";
import UnsplashContext from "../../Context/CreateContext/UnsplashContext";
import Pagination from "../../Utils/Pagination";
import Loader from "../../Components/Regular/Loader";

const Unsplash = () => {
  const unsplashContext = useContext(UnsplashContext);
  const { getUnsplash, unsplashs, loading, error } = unsplashContext;

  useEffect(() => {
    unsplashs.length = 0;
    getUnsplash();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {error && <h1>{error}</h1>}
      {loading ? (
        <Loader />
      ) : (
        <Pagination
          images={unsplashs}
          nextPage={getUnsplash}
          hasMore={true}
          query={null}
        />
      )}
    </div>
  );
};

export default Unsplash;
