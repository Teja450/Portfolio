// src/Components/ContactForm.js
import React, { useState } from 'react';
import styles from '../Styles/ContactForm.module.css';
import Navbar from './Navbar';
import spidey from '../SPIDERMAN.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const response = await fetch("https://portfolio-8q6g.onrender.com/sendContactForm", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Instead of alert, set a success message
        setSuccessMessage('Thank you for your message! We will get back to you soon.');
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMessage('Network error. Please try again.');
    } finally {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.spidermanCorner}>
        <img src={spidey} alt="Spider-Man Swinging" />
      </div>
      <Navbar />
      <div className={styles.formContainer}>
        <h2>Contact Me</h2>
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
