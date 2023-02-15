import { useState } from "react";
import Popup from "./Popup";

export default function Maple() {
  const [isOpen, setIsOpen] = useState(false);

  function clickHandler(e) {
    const yesBtn = document.getElementById("yesBtn");
    yesBtn.style.position = "fixed";
    yesBtn.style.top = 0;
    yesBtn.style.left = 0;
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    e.target.hidden = true;
    e.target.style.zIndex = -1;
  }

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  //   function success() {
  //     alert("Great! I'll be in touch :)");
  //   }

  return (
    <div className="App">
      <h1>Go on a date?</h1>
      <div className="wrapper">
        <button id="yesBtn" onClick={() => togglePopup()}>
          Yes
        </button>
        <button id="noBtn" onClick={(e) => clickHandler(e)} tabIndex="-1">
          No
        </button>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              <h1>I'm coming for you bb</h1>
              <img
                src="https://cdn.discordapp.com/attachments/1052715507171737682/1075476362820862113/image0.gif"
                alt="Gorgeous man blowing you a kiss"
              />
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
