import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Nav = () => {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navigation w-nav"
    >
      <div className="navigation-wrap">
        <Link to="/" className="logo-link w-nav-brand">
          <img
            src={`${process.env.REACT_APP_PUBLIC_URL}/assets/img/website-logo.jpeg`} // Use the correct relative path
            width="108"
            sizes="107.99107360839844px"
            alt="Website Logo"
            className="logo-image"
          />
        </Link>
        <div className="menu">
          <nav role="navigation" id="nav" className="navigation-items w-nav-menu">
            <Link to="/about" aria-current="page" className="navigation-item w-nav-link">
              About
            </Link>
            <Link to="/work" className="navigation-item w-nav-link">
              Work
            </Link>
            <Link to="/service" className="navigation-item w-nav-link">
              Services
            </Link>
            <Link to="/contact" className="navigation-item w-nav-link">
              Contact
            </Link>
          </nav>
          <div className="menu-button w-nav-button">
            <img
              src={`${process.env.REACT_APP_PUBLIC_URL}//assets/img/icon.png`} // Use the correct relative path
              width="22"
              alt="Menu Icon"
              className="menu-icon"
            />
          </div>
        </div>
        <Link to="/contact" className="primary-button cc-contact-us w-inline-block">
          <div>Contact us</div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
