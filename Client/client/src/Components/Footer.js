// src/Footer.js
import React from 'react';
import '../Styles/Footer.css'; // Make sure to import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Teja Kumar M. All Rights Reserved.</p>
        <div className="social-links">
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
