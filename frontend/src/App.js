import React, { useState, useContext } from "react";
import Login from "./containers/Login";
import Home from "./containers/Home";
import "normalize.css";
import "./styles/styles.css";
import { TransactionContext } from "./context/TransactionContext";

const App = () => {
  const { connectWallet } = useContext(TransactionContext);
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn ? (
    <Home />
  ) : (
    <Login setLoggedIn={setLoggedIn} connectWallet={connectWallet} />
  );
};

export default App;
