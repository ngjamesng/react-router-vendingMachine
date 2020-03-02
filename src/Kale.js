import React from "react";
import { Link } from "react-router-dom";
import "./Kale.css";

function Kale() {
  return (
    <div className="Kale">
      <h1>EAT YOUR VEGGIES</h1>
      <Link to="/">GO BACK</Link>
    </div>
  )
}

export default Kale;