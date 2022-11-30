import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ColorBlock from "./colorBlock";
import Number from "./number";

function App() {
  const [group, setGroup] = useState([
    { color: "red", maxNum: 99 },
    { color: "yellow", maxNum: 70 },
    { color: "blue", maxNum: 53 },
    { color: "green", maxNum: 53 },
    { color: "gold", maxNum: 13 },
    { color: "silver", maxNum: 45 },
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
      <h1>抽獎</h1>
      <ColorBlock
        group={group}
        selected={selected}
        sTime={sTime}
        setSTime={setSTime}
      />
      <button id="colorButton" onClick={getcolor}>
        Get color
      </button>

      <Number gotnumber={gotnumber} group={group} sTime={sTime} />

      <button id="numberButton" onClick={getnumber}>
        {`Get number`}
      </button>

      <button onClick={restart} id="resetbutton">
        reset
      </button>
    </div>
  );
}

export default App;
