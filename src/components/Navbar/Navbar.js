import React from "react";
import logo from "../../Logo.png";
import "./navbar.scss";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <img src={logo} alt="logo" width="10%"></img>
        <li>
          <a href="/" className="nav-link active">
            Explore
          </a>
        </li>
      </ul>
    </nav>
  );
}
