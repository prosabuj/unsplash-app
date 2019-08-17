import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageGrid from "../../Components/Regular/ImageGrid";

const Pagination = ({ images, nextPage, hasMore, query }) => {
  const [page, setPage] = useState(1);

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={() => {
        if (query === null) {
          nextPage(page + 1);
        } else nextPage(query, page + 1);
        setPage(page + 1);
      }}
      hasMore={hasMore}
      loader={
        <div
          className="spinner-grow text-success"
          style={{ margin: "0 auto" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      }
      className="row grid"
      style={{ overflow: null, height: null }}
    >
      {images.map((image, index) => (
        <ImageGrid key={index} image={image} />
      ))}
    </InfiniteScroll>
  );
};

export default Pagination;
