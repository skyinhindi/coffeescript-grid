import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/user-profile.css";
import UserSidebar from "./UserSidebar";
import History from "./History";
import Settings from "./Settings";
import Wishlist from "./Wishlist";
import BackButton from "../components/BackButton";

const UserProfile = () => {
  const [selected, setSelected] = useState("wishlist");

  useEffect(() => {
    let currentUrl = window.location.href.toLowerCase();
    console.log(currentUrl);
    if (currentUrl.includes("wishlist")) {
      setSelected("wishlist");
    } else if (currentUrl.includes("history")) {
      setSelected("history");
    } else {
      setSelected("settings");
    }
    return () => {};
  }, []);

  return (
    <div className="user-profile">
      <UserSidebar selected={selected} setSelected={setSelected} />
      <div className="view-child">
        <BackButton />
        <div className="heading-pfp">{selected}</div>
        <div className="user-view">
          <Routes>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
