import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatusMessage('Thank you! Your submission has been received!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatusMessage('Oops! Something went wrong while submitting the form.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-form-wrap" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 className="contact-heading">Contact Us</h2>
      <p style={{ color: '#666' }}>
        We’re ready to turn your ideas into reality. Whether you need assistance, want to collaborate, or seek more details about our services, don’t hesitate to get in touch. We’d love to hear from you.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name">Name</label>
        <input
          style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email Address</label>
        <input
          style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }}
          name="message"
          id="message"
          placeholder="Hi there, I’m reaching out because I think we can collaborate…"
          value={formData.message}
          onChange={handleChange}
          maxLength="5000"
        ></textarea>

        <button
          style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          type="submit"
        >
          Submit
        </button>
      </form>
      {statusMessage && <p style={{ marginTop: '20px', color: '#28a745' }}>{statusMessage}</p>}
    </div>
  );
};

export default ContactForm;
