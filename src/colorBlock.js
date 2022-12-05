import { useEffect, useState } from "react";
export default function ColorBlock({
  group,
  selected,
  sTime,
  setSTime,
  getcolor,
}) {
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
    fontSize: "400%",
    width: "70%",
    height: "30%",
    border: "10px solid black",
    padding: "5%",
    margin: "1%",

    textAlign: "center",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  let style2 = {
    backgroundColor: group[sTime].color,
    fontSize: "400%",
    width: "70%",
    height: "30%",
    border: "10px solid black",
    padding: "5%",
    margin: "1%",

    textAlign: "center",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  if (!selected) {
    return (
      <div id="block" style={style1} onClick={getcolor}>
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
