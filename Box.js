import React from "react";
import "./Box.css";

function Box({ color }) {
  return <div className="Box" style={{ backgroundColor: color }} />;
}

export default Box;
