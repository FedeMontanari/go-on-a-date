import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Spanish() {
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
        <button id="noBtn" onClick={() => failiure()} tabIndex="-1">
          No
        </button>
      </div>
      <Link to="/en">English</Link>
    </div>
  );
}
