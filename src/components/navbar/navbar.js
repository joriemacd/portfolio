import React from 'react';
import '../navbar/navbar.css'; // Import the CSS file
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {/* <li>Home</li> */}
        <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;