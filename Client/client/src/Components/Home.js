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
      {/* Profile Photo and Intro */}
      {/* Spider-Man Image */}
      
      <img src={logo} alt="Teja Kumar M" className="profile-photo" />
      <h3 className="name">Teja Kumar M</h3>
      <p className="description">
        Hi! I'm Teja Kumar, a passionate developer exploring the world of React and Node.js. 
        I enjoy creating web applications and learning new technologies.
      </p>

      {/* About Me and Contact Info Sections */}
      <div className="innerdiv">
        <div className="left">
          <h4>About Me</h4>
          <p>
          A dynamic and resourceful engineering graduate eager to contribute to innovative projects across diverse domains. Passionate about leveraging technical expertise, adaptability, and a commitment to excellence to drive meaningful results and support organizational growth.
          </p>
        </div>

        <div className="right">
          <h4>Contact Info</h4>
          <p>Email: tejakumarm456@gmail.com.com</p><br></br>
          <p></p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h4>Skills</h4>
        <div className="skills-list">
          <div className="skill-item">
            <strong>HTML/CSS:</strong>
            <p>Experienced in building responsive, accessible websites using HTML5 and CSS3. Knowledgeable in modern CSS frameworks like Flexbox and Grid for layout management.</p>
          </div>
          <div className="skill-item">
            <strong>JavaScript:</strong>
            <p>Proficient in JavaScript for developing interactive web applications, including knowledge of ES6+ features such as arrow functions, classes, and async/await.</p>
          </div>
          <div className="skill-item">
            <strong>React:</strong>
            <p>Experience with React for building dynamic user interfaces, working with hooks (useState, useEffect), and managing state with Redux.</p>
          </div>
          <div className="skill-item">
            <strong>Spring Boot:</strong>
            <p>Basic understanding of Spring Boot framework for building RESTful web services and backend applications. Familiar with dependency injection and security features.</p>
          </div>
          <div className="skill-item">
            <strong>Java:</strong>
            <p>Proficient in Java with a focus on object-oriented programming principles and familiarity with frameworks like Springboot</p>
          </div>
          <div className="skill-item">
            <strong>Python:</strong>
            <p>Skilled in Python for data analysis with experience in libraries like Pandas, NumPy, and Matplot</p>
          </div>
          <div className="skill-item">
            <strong>SQL:</strong>
            <p>Experienced in working with relational databases, writing complex queries, and managing data with MySQL and PostgreSQL.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
