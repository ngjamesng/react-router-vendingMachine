import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
  return (
    <nav className="Navbar">
     <NavLink exact to="/">
       Vending Machine
      </NavLink> 
     <NavLink exact to="/chips">
       chips
      </NavLink> 
     <NavLink exact to="/soda">
        soda
      </NavLink> 
     <NavLink exact to="/kale">
       kale
      </NavLink> 
    </nav>
  )
}

export default Navbar;