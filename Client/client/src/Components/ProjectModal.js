// src/Components/ProjectModal.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../Styles/ProjectModal.module.css';

const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Function to render tab content:
  const getTabContent = (tab) => {
    if (Array.isArray(project[tab]) && project[tab].length > 0) {
      return (
        <ul className={styles.tabList}>
          {project[tab].map((item, index) => (
            <li key={index} className={styles.tabListItem}>
              {item}
            </li>
          ))}
        </ul>
      );
    } else if (typeof project[tab] === "string" && project[tab].trim() !== "") {
      const paragraphs = project[tab].split('\n\n');
      return paragraphs.map((para, index) => (
        <p key={index} className={styles.modalParagraph}>{para}</p>
      ));
    } else {
      return <p className={styles.modalParagraph}>No details available.</p>;
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          className={styles.modalBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className={styles.modalContent}
            initial={{ scale: 0.8, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.modalImage}
              />
              <div className={styles.modalTitleContainer}>
                <h2 className={styles.modalTitle}>{project.title}</h2>
                <p className={styles.modalTech}>
                  <strong>Technologies:</strong> {project.tech}
                </p>
              </div>
            </div>
            <div className={styles.tabMenu}>
              <button 
                className={`${styles.tabButton} ${activeTab === 'overview' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'process' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('process')}
              >
                Process
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'features' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
            </div>
            <div className={styles.modalBody}>
              {getTabContent(activeTab)}
            </div>
            <button onClick={onClose} className={styles.closeButton}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
