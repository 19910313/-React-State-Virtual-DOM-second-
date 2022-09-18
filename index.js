import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./App";
import reportWebVitals from "./reportWebVitals";
// import Home from "./home-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
