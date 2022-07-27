import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";

import Login from "./containers/Login";
import Home from "./containers/Home";
import "normalize.css";
import "./styles/styles.css";
import { Navigate } from "react-router-dom";

const App = () => {
  const { authenticate, isAuthenticated, user, account } = useMoralis();

  const setBalace = async () => {
    const balance = await Moralis.Web3API.account.getTransactions();
    //console.log(balance);
  };

  useEffect(() => {
    if (isAuthenticated) {
      //console.log(user);
      setBalace();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in to NFTCart" })
        .then(function (user) {
          console.log(user.get("ethAddress"));
          return true;
        })
        .catch(function (error) {
          console.log(error);
          return false;
        });
    }
  };

  return isAuthenticated ? <Home /> : <Login login={login} />;
};

export default App;
