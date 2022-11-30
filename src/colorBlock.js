import { useEffect, useState } from "react";
export default function ColorBlock({ group, selected, sTime, setSTime }) {
  let [time, setTime] = useState(0);
  //let [sTime, setSTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (time < group.length - 1) {
        setTime((time) => time + 1);
      } else {
        setTime(0);
      }
    }, 100);
  }, [time]);

  useEffect(() => {
    setTimeout(() => {
      setSTime((sTime) => time);
    });
  }, [selected]);

  let style1 = {
    backgroundColor: group[time].color,
    fontSize: "500%",
    width: "25%",
    border: "15px solid black",
    padding: "5%",
    margin: "1%",
    position: "absolute",
    top: "20%",
    left: "10%",
    textAlign: "center",
    borderRadius: "30px",
  };

  let style2 = {
    backgroundColor: group[sTime].color,
    fontSize: "500%",
    width: "25%",
    border: "15px solid black",
    padding: "5%",
    margin: "1%",
    position: "absolute",
    top: "20%",
    left: "10%",
    textAlign: "center",
    borderRadius: "30px",
  };

  if (!selected) {
    return (
      <div id="block" style={style1}>
        {group[time].color}
      </div>
    );
  } else {
    return (
      <div id="block" style={style2}>
        {group[sTime].color}
      </div>
    );
  }
}
