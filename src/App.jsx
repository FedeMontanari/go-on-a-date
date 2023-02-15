import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [isLeft, setIsLeft] = useState(true);
  const [isRight, setIsRight] = useState(false);

  useEffect(() => {
    const noBtn = document.getElementById("noBtn");
    if (navigator.userAgentData?.mobile) {
      noBtn.addEventListener("click"),
        (e) => {
          if (isLeft) {
            e.target.style.marginLeft = "15vw";
            e.target.style.marginRight = "0px";
            setIsRight(true);
            setIsLeft(false);
          } else if (!isLeft) {
            e.target.style.marginRight = "15vw";
            e.target.style.marginLeft = "0px";
            setIsRight(false);
            setIsLeft(true);
          }
        };
    } else {
      noBtn.addEventListener("mouseover", (e) => {
        if (isLeft) {
          e.target.style.marginLeft = "15vw";
          e.target.style.marginRight = "0px";
          setIsRight(true);
          setIsLeft(false);
        } else if (!isLeft) {
          e.target.style.marginRight = "15vw";
          e.target.style.marginLeft = "0px";
          setIsRight(false);
          setIsLeft(true);
        }
      });
    }
  }, [isLeft, isRight]);

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
