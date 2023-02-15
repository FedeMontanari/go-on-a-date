import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
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
    alert("Great! I'll be in touch :)");
  }

  function failiure() {
    alert("That's not a valid option, try again");
  }

  return (
    <div className="App">
      <h1>Go on a date?</h1>
      <div className="wrapper">
        <button id="yesBtn" onClick={() => success()}>
          Yes
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
      <Link to="/es">Español</Link>
    </div>
  );
}

export default App;
