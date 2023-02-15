import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Spanish() {
  const [isLeft, setIsLeft] = useState(true);
  const [isRight, setIsRight] = useState(false);

  useEffect(() => {
    const noBtn = document.getElementById("noBtn");
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
  }, [isLeft, isRight]);

  function success() {
    alert("Genial! Yo te escribo :)");
  }

  function failiure() {
    alert("Ocurrió un error, por favor intente de nuevo mas tarde");
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
      <Link to="/en">Enlgish</Link>
    </div>
  );
}
