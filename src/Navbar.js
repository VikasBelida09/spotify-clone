import React from 'react'
import { Link, withRouter } from "react-router-dom";
const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#2ecc72" };
    } else {
      return { color: "#FFFFFF" };
    }
  };
  
const Navbar=({history})=> {
    return (
        <div style={{marginBottom:"60px"}}>
            <ul className="nav nav-tabs bg-dark fixed-top">
                <li className="nav-item">
                    <Link style={currentTab(history, "/")} className="nav-link" to="/">
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    style={currentTab(history, "/showcars")}
                    className="nav-link"
                    to="/showcars"
                    >
                    ShowCars
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    style={currentTab(history, "/bookingsection")}
                    className="nav-link"
                    to="/bookingsection"
                    >
                    ViewBookedCars
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default withRouter(Navbar);
