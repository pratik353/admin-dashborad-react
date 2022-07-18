import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvide } from "./context/darkModeContext";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvide>
      <App />
    </DarkModeContextProvide>
  </React.StrictMode>
);
