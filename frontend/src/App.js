import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";

import Login from "./containers/Login";
import Home from "./containers/Home";
import "normalize.css";
import "./styles/styles.css";

const App = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in to NFTCart" })
        .then((user) => {
          Moralis.enableWeb3();
          return true;
        })
        .catch((error) => {
          console.log(error);
          return false;
        });
    }
  };

  return isAuthenticated ? <Home /> : <Login login={login} />;
};

export default App;
