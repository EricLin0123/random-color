import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ColorBlock from "./colorBlock";
import Number from "./number";

function App() {
  const [group, setGroup] = useState([
    { color: "red", maxNum: 99 },
    { color: "yellow", maxNum: 70 },
    { color: "purple", maxNum: 53 },
    { color: "green", maxNum: 53 },
    { color: "pink", maxNum: 53 },
    { color: "gold", maxNum: 193 },
    { color: "silver", maxNum: 106 },
  ]);
  let [sTime, setSTime] = useState(0);
  let [selected, setSelected] = useState(false);
  let [gotnumber, setGotnumber] = useState(false);

  function getcolor() {
    setSelected(true);
  }

  function getnumber() {
    setGotnumber(true);
  }

  function restart() {
    setSelected(false);
    setGotnumber(false);
  }

  return (
    <div className="App">
      <ColorBlock
        className="colorBlock"
        group={group}
        selected={selected}
        sTime={sTime}
        setSTime={setSTime}
        getcolor={getcolor}
      />

      <Number
        gotnumber={gotnumber}
        group={group}
        sTime={sTime}
        getnumber={getnumber}
      />

      <button
        onClick={restart}
        id="resetbutton"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        reset
      </button>
    </div>
  );
}

export default App;
