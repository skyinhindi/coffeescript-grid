import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemView from "./ItemView";
import SearchBar from "../components/SearchBar";

const MainView = ({
  setSelected,
  searchTerm,
  setSearchTerm,
  setCartItems,
  cartItems,
}) => {
  return (
    <div className="view-child">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemView
              setSelected={setSelected}
              searchTerm={searchTerm}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/search/:searchTerm"
          element={
            <ItemView
              setSelected={setSelected}
              searchTerm={searchTerm}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="category/:categoryId"
          element={
            <ItemView
              setSelected={setSelected}
              searchTerm={searchTerm}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="category/:categoryId"
          element={
            <ItemView
              setSelected={setSelected}
              searchTerm={searchTerm}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default MainView;
