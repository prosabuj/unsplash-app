import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-secondary"
        style={{ width: "4rem", height: "4rem", textAlign: "center" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
