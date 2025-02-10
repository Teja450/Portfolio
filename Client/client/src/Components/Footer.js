// src/Components/Footer.js
import React from 'react';
import styles from '../Styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p> 2025 Teja Kumar M.</p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.instagram.com/teja_km134/profilecard/?igsh=eG9udW8xYmgyYnpy"
            target="_blank"
            rel="noreferrer"
            className={styles.socialIcon}
          >
            Instagram
          </a>
          <a
            href="https://x.com/TejaKumar36135"
            target="_blank"
            rel="noreferrer"
            className={styles.socialIcon}
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/teja-kumar-m-0727b1258"
            target="_blank"
            rel="noreferrer"
            className={styles.socialIcon}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
