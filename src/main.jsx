import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Spanish from "./Spanish";
import Home from "./Home";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/en" element={<App />} />
        <Route exact path="/es" element={<Spanish />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
