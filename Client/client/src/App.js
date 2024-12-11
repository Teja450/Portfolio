// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';
// import Navbar from './Components/Navbar'; // Import Navbar component
import Footer from './Components/Footer';
import Projects from './Components/Projects'; // Create Projects Component
import ContactForm from './Components/ContactForm'; // Create ContactForm Component

function App() {
  return (
    <Router>
      {/* Navbar Component */}
      

      {/* Routing to different sections */}
      <Routes>
        {/* Route to Projects Section */}
        <Route path="/projects" element={<Projects />} />

        {/* Route to Contact Form Section */}
        <Route path="/contact" element={<ContactForm />} />

        {/* Default Route (Home) */}
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}



export default App;
