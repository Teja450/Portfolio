import React, { useState } from 'react';
import Navbar from './Navbar';
import '../Styles/ContactForm.css';
import spidey from '../SPIDERMAN.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for handling error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(''); // Reset error message before submitting

    try {
      const response = await fetch('https://portfolio-8q6g.onrender.com/sendContactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('There was a problem with the network. Please try again.');
    } finally {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="spiderman-corner">
        <img src={spidey} alt="Spider-Man Hanging" />
      </div>
      <Navbar />
      <div className='form'>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
