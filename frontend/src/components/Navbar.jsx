import React from "react";
import LogoComp from "./LogoComp";
import { Link } from "react-router-dom";
import Ishan from "../assets/ishan.jpeg";

import MM from "../assets/mm.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <LogoComp />
      <div className="pfp-outer">
        <Link to="/pfp">
          <img className="pfp" src={Ishan} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
