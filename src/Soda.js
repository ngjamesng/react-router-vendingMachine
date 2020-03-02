import React from "react";
import { Link } from "react-router-dom";
import "./Soda.css";
function Soda() {
  return (
    <div className="Soda">
      <h1>SODA IS FIZZY</h1>
      <Link to="/">GO BACK</Link>
    </div>
  )
}

export default Soda;