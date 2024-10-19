import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitText, setSubmitText] = useState('Submit');
  const [statusMessage, setStatusMessage] = useState('');

  const publicUrl = process.env.REACT_APP_PUBLIC_URL;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitText('Sending...');
    try {
      // Send form data to backend using the API URL from environment variables
      await axios.post(`${publicUrl}/contact`, formData);
      setSubmitText('Sent');
      // Clear the form after successful submission
      setFormData({ name: '', email: '', message: '' });

      // Set a success message
      window.alert('Thank you for contacting Adiz Codez! Kindly check your mail for more information!');
    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatusMessage('There was an error submitting your form. Please try again.');
    } finally {
      // After a short delay, reset the submit button text to 'Submit'
      setTimeout(() => {
        setSubmitText('Submit');
      }, 2000); 
    }
  };

  return (
    <div>
      <div className="section">
        <div className="contact contact-copy">
          <div className="intro-content">
            <div className="heading-jumbo">Contact Us</div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="w-layout-grid contact-form-grid">
            <div className="contact-form-wrap">
              <div className="contact-form-heading-wrap">
                <h2 className="contact-heading">Contact Us</h2>
                <div className="paragraph-light">
                  We’re ready to turn your ideas into reality. Whether you need assistance, want to collaborate, or seek more details about our services, don’t hesitate to get in touch. We’d love to hear from you.
                </div>
              </div>

              <div className="contact-form w-form">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <input
                    className="text-field cc-contact-field w-input"
                    maxLength="256"
                    name="name"
                    placeholder="Enter your name"
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Email Address</label>
                  <input
                    className="text-field cc-contact-field w-input"
                    maxLength="256"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hi there, I’m reaching out because I think we can collaborate…"
                    maxLength="5000"
                    className="text-field cc-textarea cc-contact-field w-input"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <input
                    type="submit"
                    className="primary-button w-button"
                    value={submitText}
                    disabled={submitText === 'Sending...'}
                  />
                </form>
                {statusMessage && (
                  <div className="status-message cc-success-message w-form-done">
                    <div>{statusMessage}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="contact-details">
              <div className="details-wrap">
                <div className="label">Our Offices</div>
                <div className="paragraph-light">
                  Our office is designed to inspire collaboration, innovation, and problem-solving. Whether you're visiting us for a meeting or collaborating remotely.
                </div>
              </div>
              <div className="details-wrap">
                <div className="label">OUR OFFICE</div>
                <div className="paragraph-light">
                  Siva Sakthi Nagar,<br /> L.N Puram,<br /> Panruti
                </div>
              </div>
              <div className="details-wrap">
                <div className="label">WORKING HOURS</div>
                <div className="paragraph-light">9 AM - 3 PM, Mon to Fri</div>
              </div>
              <div className="details-wrap">
                <div className="label">CONTACT</div>
                <a href="mailto:adizcodez@gmail.com" className="contact-email-link">
                  adizcodez@gmail.com
                </a>
                <div className="paragraph-light">+91 63852 97091</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section cc-cta">
        <div className="container">
          <div className="cta-wrap">
            <div>
              <div className="cta-text">
                <div className="heading-jumbo-small">
                  <strong>Best Solution is the simplest IDEA!</strong>
                </div>
                <div className="paragraph-bigger cc-bigger-light">
                  At Adiz Codez, we blend technical skill with creative innovation to deliver an exceptional coding education.
                </div>
              </div>
              <a href={`${publicUrl}/contact`} className="primary-button cc-jumbo-button w-inline-block">
                <div>Start Now</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
