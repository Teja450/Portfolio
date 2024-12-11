// src/Footer.js
import React from 'react';
import '../Styles/Footer.css'; // Make sure to import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>2024 Teja Kumar M.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/teja_km134/profilecard/?igsh=eG9udW8xYmgyYnpy" target="_blank" rel="noreferrer" className="social-icon">Instagram</a>
          <a href="https://x.com/TejaKumar36135" target="_blank" rel="noreferrer" className="social-icon">Twitter</a>
          <a href="https://www.linkedin.com/in/teja-kumar-m-0727b1258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank" rel="noreferrer" className="social-icon">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
