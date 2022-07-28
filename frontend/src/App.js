import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import { useMoralisWeb3Api } from "react-moralis";

import Login from "./containers/Login";
import Home from "./containers/Home";
import "normalize.css";
import "./styles/styles.css";

const App = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const Web3Api = useMoralisWeb3Api();

  const fetchNFTs = async () => {
    const testnetNFTs = await Web3Api.Web3API.account.getNFTs({
      chain: "ropsten",
    });
    console.log(testnetNFTs);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchNFTs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

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
