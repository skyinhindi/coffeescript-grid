import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import ItemView from "./ItemView";
import SearchBar from "../components/SearchBar";

const MainView = ({ setSelected, searchTerm, setSearchTerm }) => {
  return (
    <div className="view-child">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemView setSelected={setSelected} searchTerm={searchTerm} />
          }
        />
        <Route
          path="/search/:searchTerm"
          element={
            <ItemView setSelected={setSelected} searchTerm={searchTerm} />
          }
        />
        <Route
          path="category/:categoryId"
          element={
            <ItemView setSelected={setSelected} searchTerm={searchTerm} />
          }
        />
        <Route
          path="category/:categoryId"
          element={
            <ItemView setSelected={setSelected} searchTerm={searchTerm} />
          }
        />
      </Routes>
    </div>
  );
};

export default MainView;
