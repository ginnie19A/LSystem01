import React, { Component } from 'react';
import '../Css/Navbar.css';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
				
        <div className="sidenav">
        <div className="logo">
        <a><NavLink to="/dashboard"></NavLink> </a>
        </div>
       <a><NavLink to="/dashboard" className="fa fa-list"> Home</NavLink> </a>
       <a><NavLink to="/membership" className="fa fa-id-card"> Membership</NavLink> </a>
       <a><NavLink to="/transaction" className="fa fa-handshake-o"> Transaction</NavLink> </a>
      

</div>
          
          </div>
    );
  }
}

export default Navbar;