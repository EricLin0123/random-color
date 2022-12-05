import { useEffect, useState } from "react";
export default function Number({ group, sTime, gotnumber, getnumber }) {
  let style1 = {
    fontSize: "1200%",
    width: "80%",
    height: "400px",
    border: "10px solid black",
    padding: "5%",
    margin: "1%",
    textAlign: "center",
    borderRadius: "30px",
    verticalAlign: "middle",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const maxNumber = group[sTime].maxNum;
  let roof = getRandomInt(maxNumber);

  if (!gotnumber) {
    return (
      <div style={style1} onClick={getnumber}>
        Number
      </div>
    );
  } else {
    return <div style={style1}>{roof}</div>;
  }
}
