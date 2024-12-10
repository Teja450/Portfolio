// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../Styles/Navbar.css'; // Import the CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
        <li><Link to="/Home">Home</Link></li> {/* Use Link instead of <a> */}
          <li><Link to="/projects">Projects</Link></li> {/* Use Link instead of <a> */}
          <li><Link to="/contact">Contact Me</Link></li> {/* Use Link instead of <a> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
