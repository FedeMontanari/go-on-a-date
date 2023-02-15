import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

export default function Home() {
  return (
    <div className="homeWrapper">
      <h1>Choose a language:</h1>
      <Link to="/en">English</Link>
      <Link to="/es">Español</Link>
    </div>
  );
}
