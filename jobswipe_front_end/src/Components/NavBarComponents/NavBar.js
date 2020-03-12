import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => (
  <nav className="nav">
    <a href="/" className="logo">
      {" "}
      JOBSWIPE
      <FontAwesomeIcon icon="hand-pointer" className="logo-fa" />
    </a>
    <ul className="nav-ul">
      <li className="nav-li">
        <Link className="nav-link" to="/">
          Logout
        </Link>
      </li>
      <li className="nav-li likes">
        <Link className="nav-link" to="/likes">
          Liked jobs <FontAwesomeIcon icon="thumbs-up" />
        </Link>
      </li>
    </ul>
  </nav>
);
export default NavBar;
