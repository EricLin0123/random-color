import { useEffect, useState } from "react";
export default function Number({ group, sTime, gotnumber }) {
  let style1 = {
    fontSize: "200%",
    width: "25%",
    border: "10px solid black",
    padding: "5%",
    margin: "1%",
    position: "absolute",
    top: "55%",
    left: "30%",
    textAlign: "center",
    borderRadius: "30px",
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const maxNumber = group[sTime].maxNum;
  let roof = getRandomInt(maxNumber);

  if (!gotnumber) {
    return <div style={style1}>{`Num.`}</div>;
  } else {
    return <div style={style1}>{roof}</div>;
  }
}
