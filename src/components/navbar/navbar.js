import React from 'react';
import '../navbar/navbar.css'; // Import the CSS file
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/work" activeclassname="active">Work</NavLink></li>
        <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
        <li><a href="https://docs.google.com/document/d/1V5CmAL86rePtlim6c3o9IKOFqF2iXC0V/edit?usp=sharing&ouid=101714435999276551250&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;