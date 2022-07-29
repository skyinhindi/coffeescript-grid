import React from "react";
import { BarLoader } from "react-spinners";
import "../styles/loading.css";

const Loading = ({ loading, color }) => {
  return (
    <div className="loading-div">
      <BarLoader
        size={8}
        color={color != null ? `${color}` : `#EB5E28`}
        loading={loading}
      />
    </div>
  );
};

export default Loading;
