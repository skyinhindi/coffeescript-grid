import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl="https://c4ajuctk0dfp.usemoralis.com:2053/server"
      appId="22rBWwW24gBuTKtsYodpNnCvmoQf2huDtXc0oLCW"
    >
      <HashRouter>
        <App />
      </HashRouter>
    </MoralisProvider>
  </React.StrictMode>
);
