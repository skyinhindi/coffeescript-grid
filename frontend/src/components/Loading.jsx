import React from "react";
import { BarLoader } from "react-spinners";

const Loading = ({ loading }) => {
  return <BarLoader size={8} color="#EB5E28" loading={loading} />;
};

export default Loading;
