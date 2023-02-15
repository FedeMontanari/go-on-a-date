import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Spanish() {
  const [position, setPosition] = useState("left");

  function clickHandler(e) {
    if (!navigator.userAgentData?.mobile) {
      failiure();
      return;
    }
    if (position === "right") {
      e.target.style.marginRight = "30vw";
      e.target.style.marginLeft = "0px";
      setPosition("left");
    } else if (position === "left") {
      e.target.style.marginLeft = "30vw";
      e.target.style.marginRight = "0px";
      setPosition("right");
    }
  }

  function hoverHandler(e) {
    if (position === "right") {
      e.target.style.marginRight = "15vw";
      e.target.style.marginLeft = "0px";
      setPosition("left");
    } else if (position === "left") {
      e.target.style.marginLeft = "15vw";
      e.target.style.marginRight = "0px";
      setPosition("right");
    }
  }

  function success() {
    alert("Genial! Yo te escribo :)");
  }

  function failiure() {
    alert("Esa opción no es valida, por favor intente de nuevo");
  }

  return (
    <div className="App">
      <h1>Salimos?</h1>
      <div className="wrapper">
        <button id="yesBtn" onClick={() => success()}>
          Si
        </button>
        <button
          id="noBtn"
          onClick={(e) => clickHandler(e)}
          onMouseOver={(e) => hoverHandler(e)}
          tabIndex="-1"
        >
          No
        </button>
      </div>
      <Link to="/en">English</Link>
    </div>
  );
}
