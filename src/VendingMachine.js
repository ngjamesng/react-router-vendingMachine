import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"

function VendingMachine(){


  return (
    <div className="VendingMachine">
      <h1 className="VendingMachine-Title">THIS IS A VENDING MACHINE</h1>
      <div className="VendingMachine-Menu">
        <p>What do you want to eat?</p>
        <Link to="/chips">chips</Link>
        <Link to="/soda">soda</Link>
        <Link to="/kale">kale</Link>
      </div>
    </div>
  )
}

export default VendingMachine;