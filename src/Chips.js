import React from "react";
import { Link } from "react-router-dom";
import "./Chips.css";

function Chips() {
  return (
    <div className="Chips">
      <h1>CHIPS ARE CRUNCHY</h1>
      <Link to="/">GO BACK</Link>
    </div>
  )
}

export default Chips;