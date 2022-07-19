import React, {useState } from "react";
import Login from "./containers/Login";
import Home from "./containers/Home";
import 'normalize.css';
import './styles/styles.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn? <Home /> : <Login setLoggedIn={setLoggedIn} />
}

export default App;
