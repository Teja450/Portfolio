// src/Components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import spidey from '../SPIDERMAN.png';
import styles from '../Styles/Home.module.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className={styles.outerDiv}>
      {/* Spiderman decorative image */}
      <div className={styles.spidermanCorner}>
        <img src={spidey} alt="Spider-Man Swinging" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <div className={styles.hero}>
        <img src={logo} alt="Teja Kumar M" className={styles.profilePhoto} />
        <h1 className={styles.name}>Teja Kumar M</h1>
        <p className={styles.description}>
        Hi! I'm Teja Kumar, a passionate developer with a Spidey sense for innovation. I build dynamic web applications using React, Node.js, and cutting‑edge technology, and I'm equally enthusiastic about data engineering—transforming complex data into actionable insights to drive smarter decisions.
        </p>
        <Link to="/contact" className={styles.ctaButton}>
          Get in Touch
        </Link>
      </div>

      {/* About Section */}
      <div className={styles.innerDiv}>
        <div className={styles.left}>
          <h2>About Me</h2>
          <p>
            A dynamic engineering graduate eager to contribute to innovative projects across diverse domains. I thrive on creative problem solving and craft web experiences that are as agile as your friendly neighborhood Spider‑Man!
          </p>
        </div>
        <div className={styles.right}>
          <h2>Contact Info</h2>
          <p>Email: tejakumarm456@gmail.com</p>
          <p></p>
        </div>
      </div>

      {/* Skills Section */}
      <div className={styles.skillsSection}>
        <h2>Skills</h2>
        <div className={styles.skillsList}>
          {[
            { title: "HTML/CSS", description: "Building responsive, accessible websites" },
            { title: "JavaScript", description: "Crafting interactive web experiences" },
            { title: "React", description: "Designing component‑driven UIs" },
            { title: "Spring Boot", description: "Developing robust backend solutions" },
            { title: "Java", description: "Implementing object‑oriented principles" },
            { title: "Python", description: "Data analysis & scripting" },
            { title: "SQL", description: "Managing relational databases" },
            { title: "Node.js", description: "Managing Backend and Api Endpoint" },
            { title: "PySpark", description: "Cleaning and Analysing Data " },
          ].map((skill, index) => (
            <div className={styles.skillItem} key={index}>
              <strong>{skill.title}</strong>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
