import React, { useState }  from 'react'
import axios from 'axios'
function Footer() {

    const [email,setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          // Send the email address to the backend
          const response = await axios.post(`https://appsail-50022714114.development.catalystappsail.in/subscribe`, { email },{  headers: {
            'Content-Type': 'application/json',
          },});
    
          // Show success message

          setEmail(''); // Clear the email input field
          window.alert (response.data.message)
        } catch (error) {
          if (error.response && error.response.data.message) {
            window.alert(error.response.data.message); // Show backend error message
          } else {
            window.alert('Failed to subscribe. Please try again.');
          }
        }
      };
    const SocialLink = ({ icon }) => (
        <a href="/" className="udesly-social-link w-inline-block">
          <img src={`assets/img/${icon}`} loading="lazy" alt="" />
        </a>
      );
    
  return (
    <div>
        <div className="udesly-footer-2-columns-2">
        <div className="udesly-container-2">
            <div className="w-layout-grid udesly-grid-2-columns">
            <div className="udesly-column-2">
                <a href="/" className="udesly-footer-logo w-inline-block">
                <img
                    src="assets/img/website-logo.jpeg"
                    loading="lazy"
                    width="100"
                    alt=""
                    className="udesly-footer-logo"
                />
                </a>
                <div className="udesly-footer-menu">
                <p>
                    Adiz Codez is an ambitious startup committed to enabling
                    enterprises and individuals with creative solutions, converting
                    concepts into achievements, and fostering development through
                    teamwork and expertise.
                </p>
                </div>
            </div>
            <div className="udesly-footer-form">
                <p className="udesly-paragraph-small udesly-text-color-neutral-700">
                Get the latest updates about properties and trends in the real
                estate market.
                </p>
                <div className="udesly-form-block w-form">
                <form
                    id="email-form"
                    name="email-form"
                    action='POST'
                    onSubmit={handleSubmit}
                    className="udesly-form"
                >
                    <input
                    className="udesly-udesly-text-field w-input"
                    maxLength="256"
                    name="Email-6"
                    placeholder="Type your email..."
                    type="email"
                    id="Email-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required=""
                    />
                    <input
                    type="submit"
                    className="udesly-submit-button w-button"
                    value="Subscribe"
                    />
                </form>
                <div className="udesly-success-message w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="udesly-error-message w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                </div>
                </div>
            </div>
            </div>
            <div className="udesly-divider"></div>
            <div className="udesly-footer-bottom">
            <div className="udesly-social">
                {[
                "Facebook.svg",
                "Twitter.svg",
                "LinkedIn.svg",
                "Instagram.svg",
                ].map((icon, index) => (
                <SocialLink key={index} icon={icon} />
                ))}
            </div>
            <div className="udesly-flex udesly-gap-32">
                <a href="/" className="udesly-link">
                Created by Adiz
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer