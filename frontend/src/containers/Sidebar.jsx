import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../components/Logo";
import Ishan from "../assets/ishan.jpeg";
import LogoComp from "../components/LogoComp";
import { useMoralis } from "react-moralis";

const home = {
  id: 0,
  name: "Home",
  path: "/",
  icon: "/images/home.svg",
};

const categories = [
  {
    id: 1,
    name: "Jewelery",
    path: "jewelery",
    icon: "/images/GameController.svg",
  },
  {
    id: 2,
    name: "Beauty",
    path: "beauty",
    icon: "/images/EyeClosed.svg",
  },
  {
    id: 3,
    name: "Electronics",
    path: "electronics",
    icon: "/images/GameController.svg",
  },
  {
    id: 4,
    name: "Apparel",
    path: "apparel",
    icon: "/images/TShirt.svg",
  },
];
const Sidebar = ({ selected, setSelected }) => {
  const { logout, user } = useMoralis();

  const handleLogout = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <div className="sidebar">
      <div className="side-bar-header">
        <Logo width={150} setSelected={setSelected} />
        <button className="buy-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="categories">
        <h3 className="sidebar-heading">Categories</h3>
        {categories.map((category) => {
          return (
            <Link
              onClick={() => {
                setSelected(category.path);
              }}
              to={`/category/${category.path}`}
              key={category.path}
              className="category-list-item"
            >
              <div
                className={
                  selected === category.path
                    ? "category-item-s"
                    : "category-item"
                }
              >
                <img
                  className={
                    selected === category.path
                      ? "category-icon"
                      : "category-icon-ns"
                  }
                  src={category.icon}
                  alt="logo"
                  width={24}
                />
                <p>{category.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="sidebar-bottom">
        <Link to="/pfp">
          <img className="pfp" src={Ishan} alt="" />
        </Link>
        <Link
          className={selected === "/" ? "home-list-item" : "home-list-item-ns"}
          to="/"
          onClick={() => {
            setSelected("/");
          }}
        >
          <img
            className={selected === "/" ? "home--icon" : "home--icon-ns"}
            src={home.icon}
            alt="home-icon"
            width={24}
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
