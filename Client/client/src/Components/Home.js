// src/Components/Home.js
import React from 'react';
import logo from '../logo.png';
import spidey from '../SPIDERMAN.png';
import '../Styles/Home.css';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="outerdiv">
      <div className="spiderman-corner">
        <img src={spidey} alt="Spider-Man Hanging" />
      </div>
      <Navbar />
      
      <img src={logo} alt="Teja Kumar M" className="profile-photo" />
      <h3 className="name">Teja Kumar M</h3>
      <p className="description">
        Hi! I'm Teja Kumar, a passionate developer exploring the world of React and Node.js. 
        I enjoy creating web applications and learning new technologies.
      </p>

      <div className="innerdiv">
        <div className="left">
          <h4>About Me</h4>
          <p>
            A dynamic and resourceful engineering graduate eager to contribute to innovative projects across diverse domains. Passionate about leveraging technical expertise, adaptability, and a commitment to excellence to drive meaningful results and support organizational growth.
          </p>
        </div>
        <div className="right">
          <h4>Contact Info</h4>
          <p>Email: tejakumarm456@gmail.com</p>
        </div>
      </div>

      <div className="skills-section">
        <h4>Skills</h4>
        <div className="skills-list">
          {[
            { title: "HTML/CSS", description: "Experienced in building responsive, accessible websites using HTML5 and CSS3." },
            { title: "JavaScript", description: "Proficient in JavaScript for developing interactive web applications." },
            { title: "React", description: "Experience with React for building dynamic user interfaces." },
            { title: "Spring Boot", description: "Basic understanding of Spring Boot framework for backend development." },
            { title: "Java", description: "Proficient in Java with a focus on object-oriented principles." },
            { title: "Python", description: "Skilled in Python for data analysis using Pandas and NumPy." },
            { title: "SQL", description: "Experienced in working with relational databases." },
          ].map((skill, index) => (
            <div className="skill-item" key={index}>
              <strong>{skill.title}:</strong>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
