import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageGrid from "../../Components/Regular/ImageGrid";
import Loader from "../../Components/Regular/Loader";

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
      loader={<Loader />}
      className="row grid"
      style={{ overflow: null, height: null }}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {images.map((image, index) => (
        <ImageGrid key={index} image={image} />
      ))}
    </InfiniteScroll>
  );
};

export default Pagination;
