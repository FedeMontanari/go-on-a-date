import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Spanish from "./Spanish";
import Home from "./Home";
import Fally from "./Fally";
import Bread from "./Bread";
import Maple from "./Maple";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/en" element={<App />} />
        <Route exact path="/es" element={<Spanish />} />
        <Route exact path="/daddy" element={<Fally />} />
        <Route exact path="/mommy" element={<Bread />} />
        <Route exact path="/chad" element={<Maple />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
