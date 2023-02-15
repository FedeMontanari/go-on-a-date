import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [position, setPosition] = useState("left");

  useEffect(() => {
    const noBtn = document.getElementById("noBtn");
    if (!navigator.userAgentData?.mobile) {
      noBtn.addEventListener("mouseover", (e) => {
        if (position === "right") {
          e.target.style.marginRight = "15vw";
          e.target.style.marginLeft = "0px";
          setPosition("left");
        } else if (position === "left") {
          e.target.style.marginLeft = "15vw";
          e.target.style.marginRight = "0px";
          setPosition("right");
        }
      });
    } else {
      noBtn.addEventListener("click", (e) => {
        if (position === "right") {
          e.target.style.marginRight = "30vw";
          e.target.style.marginLeft = "0px";
          setPosition("left");
        } else if (position === "left") {
          e.target.style.marginLeft = "30vw";
          e.target.style.marginRight = "0px";
          setPosition("right");
        }
      });
      failiure = () => {
        return;
      };
    }
  }, [position]);

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
        <button id="noBtn" onClick={() => failiure()} tabIndex="-1">
          No
        </button>
      </div>
      <Link to="/es">Español</Link>
    </div>
  );
}

export default App;
