import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Logo from "../components/Logo";
import '../styles/sidebar.css';
import Ishan from "../assets/ishan.jpeg";
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
const user_profiles = [
  {
    id: 1,
    name: "Cart",
    path: "cart",
    icon: "",
  },
  {
    id: 2,
    name: "Whishlist",
    path: "wishlist",
    icon: "",
  },
  {
    id: 3,
    name: "History",
    path: "history",
    icon: "",
  },
  {
    id: 4,
    name: "Manage Ownership",
    path: "ownership",
    icon: "",
  },
  {
    id: 5,
    name: "Settings",
    path: "settings",
    icon: "",
  }
];
const Sidebar = ({ selected, setSelected }) => {
  const { logout, user } = useMoralis();

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
    console.log("logged out");
  };

  return (
    <div className="sidebar">
      <div className="side-bar-header">
        <Logo width={75} setSelected={setSelected} />
        <FontAwesomeIcon className="logoutbtn" icon={faRightFromBracket} size="xl" onClick={handleLogout}/>
      </div>
      <div className="categories">
        <h3 className="sidebar-heading">Categories</h3>
        {categories.map((category) => {
          return (
            <Link
              onMouseEnter={() => {}}
              onClick={() => {
                setSelected(category.path);
              }}
              to={`/category/${category.path}`}
              key={category.path}
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
        <Link to={`/user/${user.id}/wishlist`}>
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
