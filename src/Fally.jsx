import React, { useState } from "react";
import "./App.css";
import Popup from "./Popup";

export default function Fally() {
  const [isOpen, setIsOpen] = useState(false);

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <h1>Go on a date?</h1>
      <div className="wrapper" style={{ justifyContent:"space-evenly" }}>
        <button id="yesBtn" onClick={() => togglePopup()}>
          Yes
        </button>
        <button id="yesBtn" onClick={() => togglePopup()}>
          Yes
        </button>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
            <h1>I'm coming for you bb</h1>
            <video autoPlay loop>
                <source src="https://media.tenor.com/ax6j-VihV4kAAAPo/noelle-hololive.mp4" type="video/mp4" />
            </video>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
