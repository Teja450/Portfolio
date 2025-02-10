// src/Components/Projects.js
import React, { useState } from 'react';
import styles from '../Styles/Projects.module.css';
import Navbar from './Navbar';
import spidey from '../SPIDERMAN.png';
import ProjectModal from './ProjectModal';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Updated projects array with structured details:
  const projects = [

    
    {
      id: 1,
      title: "Anime E-Commerce Platform",
      tech: "React, Node.js, PostgreSQL",
      shortDesc: "A comprehensive full‑stack anime e-commerce website featuring user registration, dynamic product filtering, detailed product pages, a shopping cart with mock payment, and an admin dashboard for user and order management.",
      overview: "The Anime E-Commerce Platform offers a complete online shopping experience for anime merchandise. Users can register, log in, and manage their profiles—including tracking order history, loyalty points, and membership status. The platform features an intuitive product catalog with search and filtering options, a dynamic shopping cart that updates to 'buy now' upon selection, and detailed product pages that help users make informed purchase decisions.",
      process: [
        "Developed a robust authentication system for user registration, email verification, and secure login.",
        "Implemented comprehensive profile management with order history, loyalty points, and profile photo editing.",
        "Built a dynamic product catalog with advanced search, filtering, and sorting features.",
        "Integrated a shopping cart system that seamlessly transitions into a 'buy now' option with mock payment processing.",
        "Created an admin dashboard for managing users, products, and orders (including status updates such as packed, processing, and shipped).",
        "Leveraged React on the front end and Node.js with PostgreSQL on the back end to ensure scalability and reliability."
      ],
      features: [
        "User-friendly registration and secure login with email authentication.",
        "Detailed user profile page displaying order history, membership status, and loyalty points.",
        "Advanced product filtering and search capabilities for easy discovery of anime merchandise.",
        "Interactive shopping cart that supports 'add to cart' and immediate 'buy now' actions.",
        "Mock payment integration with order confirmation and automatic history tracking.",
        "Robust admin dashboard with user management, product CRUD operations, and order status tracking."
      ],
      image: "/project_images/anime_ecommerce.png" // Place your image file in the public folder with this name.
    },

    {
      id: 2,
      title: "NYC Taxi Data Analysis",
      tech: "Azure Databricks, Power BI, PySpark",
      shortDesc: "A data engineering project that transforms raw taxi data into actionable insights.",
      overview:
        "The NYC Taxi Data Analysis project aggregates raw taxi transaction data to provide a comprehensive view of urban mobility. By leveraging advanced data engineering techniques, the project processes and visualizes large-scale data, enabling stakeholders to make data-driven decisions. It uncovers key trends and performance metrics in a visually interactive format.",
      process: [
        "Collected raw taxi data from diverse sources and stored it in a data lake.",
        "Mounted and loaded data from DataLake into Azure Databricks as dataframe.",
        "Cleaned and transformed data to remove null values and standardize formats using PySpark.",
        "Persisted processed data as structured tables in the Databricks File System.",
        "Developed interactive visualizations in Power BI to highlight key metrics."
      ],
      features: [
        "Detailed analysis of total trips and average fare prices.",
        "Identification of peak hours, weekdays, and months for taxi usage.",
        "Interactive Power BI dashboards for real-time insights.",
        "Robust data processing ensuring high accuracy and consistency."
      ],
      image: "/project_images/nyctaxi.png" // Ensure this image exists in your public folder.
    },
    
    {
      id: 3,
      title: "Student Result Management System",
      tech: "React, Spring Boot, MySQL",
      shortDesc: "A comprehensive system to manage student results and feedback.",
      overview:
        "The Student Result Management System is designed to streamline academic performance tracking. It provides a unified platform for students, teachers, and administrators to access and manage academic records seamlessly. With a modern, responsive design and robust data security, the system enhances the overall educational experience.",
      process: [
        "Developed a responsive front end using React.",
        "Implemented back-end business logic with Spring Boot.",
        "Utilized MySQL for secure and efficient data storage.",
        "Integrated multi-role authentication and feedback management."
      ],
      features: [
        "Student portal for viewing results and performance history.",
        "Teacher dashboard for marks entry and trend analysis.",
        "Admin control panel for user management and feedback filtering.",
        "Real-time updates and notifications."
      ],
      image: "/project_images/studentresult.png" // Ensure this image exists in your public folder.
    },
    

    {
      id: 4,
      title: "CultureCraze Couture",
      tech: "React, Flask, ResNet50, KNN, Unet, GMM, CNN",
      shortDesc: "An innovative fashion recommendation system tailored for the rich and diverse landscape of Indian fashion.",
      overview: "CultureCraze Couture transforms the way users experience fashion by providing personalized style suggestions specifically for Indian ethnic wear. The platform seamlessly blends image-based and text-based recommendations to help users curate their wardrobe with confidence. By integrating state-of-the-art deep learning and machine learning techniques, it offers an immersive, virtual try-on experience along with efficient wardrobe management.",
      process: [
        "Analyzed user-uploaded images using ResNet50 to extract key visual features.",
        "Applied K-Nearest Neighbors (KNN) to identify the most suitable matching apparel items.",
        "Implemented a virtual try-on feature using Unet and GMM for accurate garment segmentation and alignment.",
        "Integrated advanced color detection algorithms and CNN technology for precise clothing matching."
      ],
      features: [
        "Delivers personalized fashion recommendations tailored to individual style.",
        "Seamlessly combines image- and text-based recommendation techniques.",
        "Offers an immersive virtual try-on experience for better decision-making.",
        "Provides efficient wardrobe management with real-time style updates."
      ],
      image: "/project_images/fashion.png" // Ensure this image exists in your public folder
    },

    
    
    {
      id: 5,
      title: "Project X (Coming Soon)",
      tech: "TBA",
      shortDesc: "Details coming soon...",
      overview:
        "Project X is an upcoming innovative project that will redefine modern web solutions with advanced features and a sleek design. Stay tuned for more details as the project evolves and sets new standards in the industry. We promise to deliver an exceptional user experience and state-of-the-art functionality.",
      process: [],
      features: []
      // Optionally, include an image property if available.
    }
  ];

  return (
    <div className={styles.projectsContainer}>
      <Navbar />
      <div className={styles.spidermanCorner}>
        <img src={spidey} alt="Spider-Man Swinging" />
      </div>
      <h1 className={styles.sectionTitle}>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`${styles.projectCard} ${index % 2 === 0 ? styles.leftCard : styles.rightCard}`}
            onClick={() => setSelectedProject(project)}
          >
            <div
              className={styles.projectImage}
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p className={styles.tech}>{project.tech}</p>
              <p className={styles.shortDesc}>{project.shortDesc}</p>
              <span className={styles.learnMore}>Learn More →</span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
