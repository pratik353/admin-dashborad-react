import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvide } from "./context/darkModeContext";
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DarkModeContextProvide>
      <App />
    </DarkModeContextProvide>
    </BrowserRouter>
  </React.StrictMode>
);
