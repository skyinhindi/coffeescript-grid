import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://xxxxx/server" appId="YOUR_APP_ID">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>
);
