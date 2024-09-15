// Contact.js
import React, { useState } from 'react';
import '../Styles/contact.styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Netlify will handle the form submission automatically
  };

  return (
    <div className="contact-card">
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <h2>Contact Me</h2>
        
        {/* Hidden input for Netlify honeypot */}
        <input type="hidden" name="bot-field" />

        {/* Hidden input for form name */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="form-group">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <i className="fas fa-phone"></i>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="form-group">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <i className="fas fa-comment"></i>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Feedback"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
