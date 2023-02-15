import "./App.css";

export default function Bread() {
  function success() {
    alert("Great! I'll be in touch :)");
  }

  function failure(e) {
    let noBtn = document.getElementById("noBtn");
    const newBtn = document.createElement("button");
    newBtn.id = "yesBtn";
    newBtn.innerText = "Yes";
    newBtn.onclick = () => success();
    const divWrapper = document.getElementById("wrapper");
    divWrapper.appendChild(newBtn);
    noBtn.hidden = true;
  }

  return (
    <div className="App">
      <h1>Go on a date?</h1>
      <div className="wrapper" id="wrapper">
        <button id="yesBtn" onClick={() => success()}>
          Yes
        </button>
        <button id="noBtn" tabIndex="-1" onClick={(e) => failure(e)}>
          No
        </button>
      </div>
    </div>
  );
}
