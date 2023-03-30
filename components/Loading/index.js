import React from "react";
import { useSelector } from "react-redux";

const Loading = (show) => {
  // const loading = useSelector((state) => state.loading.loading);
  return (
    <>
      {show.show && (
        <div className="wrapper-loading">
          <div className="spinner-3"></div>
        </div>
      )}
    </>
  );
};

export default Loading;
