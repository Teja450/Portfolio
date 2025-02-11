// src/Components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Function to view resume using an external link (opens in new tab)
  const handleViewResume = () => {
    window.open(
      'https://drive.google.com/file/d/1vDI-kVUFcGt_u_CnG497N10OOSZPRa0F/view?usp=drive_link',
      '_blank'
    );
    setIsOpen(false);
  };

  // Function to download resume (opens a download URL in new tab)
  const handleDownloadResume = () => {
    window.open(
      'https://drive.google.com/file/d/1vDI-kVUFcGt_u_CnG497N10OOSZPRa0F/view?usp=drive_link',
      '_blank'
    );
  };

  const handleTextClick = () => {
    navigate('/home');
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo} onClick={handleTextClick}>
          SpiderDev
        </div>
        {/* Hamburger Toggle for Mobile */}
        <div className={styles.hamburger} onClick={handleToggle}>
          <div className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`}></div>
        </div>
        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <li>
            <Link to="/home" className={styles.link} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className={styles.link} onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.link} onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          {/* Mobile View Resume Buttons */}
          <li className={styles.mobileResume}>
            <button onClick={() => { handleViewResume(); handleLinkClick(); }}>
              View Resume
            </button>
          </li>
          <li className={styles.mobileResume}>
            <button onClick={() => { handleDownloadResume(); handleLinkClick(); }}>
              Download Resume
            </button>
          </li>
        </ul>
        {/* Desktop View Resume Buttons */}
        <div className={styles.resumeButton}>
          <button onClick={handleViewResume}>View Resume</button>
          <button onClick={handleDownloadResume}>Download Resume</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
