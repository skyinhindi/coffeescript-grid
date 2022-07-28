import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Logo from "../components/Logo";
import '../styles/sidebar.css';
import Ishan from "../assets/ishan.jpeg";
import { useMoralis } from "react-moralis";

const UserSidebar = ({ selected, setSelected }) => {
  const { logout, user } = useMoralis();

  const navigate = useNavigate();

  const home = {
    id: 0,
    name: "user",
    path: "/",
    icon: "/images/home.svg",
  };
  
  const categories = [
    {
      id: 1,
      name: "about",
      path: `/about`,
      icon: "/images/GameController.svg",
    },
    {
      id: 1,
      name: "wishlist",
      path: "wishlist",
      icon: "/images/GameController.svg",
    },
    {
      id: 2,
      name: "history",
      path: "history",
      icon: "/images/EyeClosed.svg",
    },
    {
      id: 3,
      name: "settings",
      path: "settings",
      icon: "/images/GameController.svg",
    },
    
  ];

  const handleLogout = async () => {
    await logout();
    navigate('/');
    console.log("logged out");
  };

  return (
    <div className="sidebar">
        <Logo width={75} setSelected={setSelected} />
      <div className="categories">
        <h3 className="sidebar-heading">User Profile</h3>
        {categories.map((category) => {
          return (
            <Link
              onMouseEnter={() => {}}
              onClick={() => {
                setSelected(category.path);
              }}
              to={`/user/${user.id}/${category.path}`}
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
        <Link to={`/user/${user.id}`}>
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

export default UserSidebar;
