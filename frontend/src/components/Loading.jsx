import React from "react";
import { BarLoader } from "react-spinners";
import '../styles/loading.css';

const Loading = ({ loading }) => {
  return <div className="loading-div">
    <BarLoader size={8} color="#EB5E28" loading={loading} />
  </div>;
};

export default Loading;
