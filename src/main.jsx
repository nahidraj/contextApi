import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CountProvider } from "./context/CouterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CountProvider>
    <App />
  </CountProvider>
);
