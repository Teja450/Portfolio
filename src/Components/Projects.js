// src/Projects.js
import React from 'react';
import '../Styles/Projects.css';
import Navbar from './Navbar';
import spidey from '../SPIDERMAN.png';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="spiderman-corner">
        <img src={spidey} alt="Spider-Man Hanging" />
      </div>
      <Navbar></Navbar>
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Project 1: Student Result Management System</h3>
        <p>
          A web application built using React, Spring Boot, and MySQL. This system allows students to log in using their USN and password, view their results semester-wise, and submit feedback. The admin can add or update results, and teachers can manage student data.
        </p>
      </div>

      <div className="project-card">
        <h3>Project 2: CultureCraze Couture</h3>
        <p>
          An innovative fashion recommendation system that focuses on personalized style suggestions for Indian fashion. The platform uses machine learning and deep learning techniques, including ResNet50, K-Nearest Neighbors (KNN), Unet, GMM, color detection algorithms, and CNN technology. The application provides image-based and text-based recommendations, wardrobe management, and virtual try-on capabilities. Built using React for the front end and Python Flask for the back end.
        </p>
      </div>

      <div className="project-card">
        <h3>Project 3: Comprehensive Analysis of NYC Taxi Data Using Azure Databricks and Power BI</h3>
        <p>
       
Implemented a data pipeline using Azure Databricks to process NYC taxi datasets. Conducted data cleaning, exploratory analysis, and visualization using PySpark, SQL, and Power BI. Key insights included revenue, trip counts, distance covered, and fare trends. Stored processed data as structured tables in Databricks for seamless integration and reporting.

        </p>
      </div>

      {/* Add more project cards as needed */}
    </section>
  );
};

export default Projects;
