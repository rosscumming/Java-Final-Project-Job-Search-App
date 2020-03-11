import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (

<nav className="nav">
  <ul className="nav-ul">
    <li className="nav-li">
      <Link className="nav-link" to="/">Logout</Link>
    </li>
    <li className="nav-li">
      <Link className="nav-link" to="/likes">Likes</Link>
    </li>
  </ul>
</nav>


);
export default NavBar;
