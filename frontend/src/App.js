import React, { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";

import Login from "./containers/Login";
import Home from "./containers/Home";
import "normalize.css";
import "./styles/styles.css";

function App() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn ? <Home /> : <Login setLoggedIn={setLoggedIn} />;
}

export default App;
