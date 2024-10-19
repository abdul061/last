import React from "react";
// Main App component
const Home = () => {
  // Navigation Component


  // Intro Section Component
  const IntroSection = () => (
    <div className="section cc-store-home-wrap">
      <div className="intro-header" style={{ opacity: 1 }}>
        <div className="intro-content cc-homepage">
          <div className="intro-text">
            <div className="heading-jumbo" data-w-id="86e64837-0616-515b-4568-76c147234d21" style={{ opacity: 1 }}>
              Create your success story.
            </div>
            <div
              className="paragraph-bigger cc-bigger-white-light"
              style={{ opacity: 1 }}
            >
              Your vision, our tech—we create solutions together.
              <br />
            </div>
          </div>
          <a href="/about" className="secondary-button w-inline-block">
            <div className="text-block">Learn More</div>
          </a>
        </div>
      </div>
    </div>
  );

  // Home Content Wrap Component
  const HomeContentWrap = () => (
    <div className="container">
      <div className="motto-wrap">
        <div className="label cc-light" style={{ opacity: 1 }}>
          What we believe in
        </div>
        <div className="heading-jumbo-small" style={{ opacity: 1 }}>
          Where idea meets tech, it creates solution
          <br />
        </div>
      </div>

      <div className="divider"></div>
      <div
        className="home-content-wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div className="about-grid">
          <AboutCard
            title="Who we are"
            description="We are a passionate professional team representing 
            different areas of work, committed to talent development and meaningful experience facilitation."
            link="/about"
            style={{}}
          />
          <img
            src={`${process.env.REACT_APP_PUBLIC_URL}/assets/img/Hero-section-img-2.png`}
            alt=""
            className="image"
          />
        </div>
        <div className="about-grid cc-about-2">
          <img
            src={`${process.env.REACT_APP_PUBLIC_URL}/assets/img/Hero-section-img-1.png`}
            alt=""
            className="image-2"
          />
          <AboutCard
            title="What we do"
            description="We are a committed team focused on talent 
            development and creating impactful learning experiences 
            tailored to learners and organizations."
            link="/team"
            style={{}}
          />
        </div>
      </div>
    </div>
  );

  // About Card Component
  const AboutCard = ({ title, description, link, style }) => (
    <div className="home-section-wrap" style={style}>
      <div className="label cc-light">About</div>
      <h2 className="section-heading">{title}</h2>
      <p className="paragraph-light">{description}</p>
      <a href={link} className="primary-button w-inline-block">
        <div>Learn More</div>
      </a>
    </div>
  );

  // Why Join Us Section
  const WhyJoinUs = () => (
    <div className="section">
      <div className="container">
        <div className="blog-heading">
          <h2 className="work-heading">Why you join us?</h2>
        </div>
        <div className="collection-list-wrapper w-dyn-list">
          <div role="list" className="collection-wrap w-dyn-items">
            {[
              "Customized Strategies",
              "Skill Enhancement",
              "Affordable Pricing",
            ].map((item, index) => (
              <div
                key={index}
                className="blog-preview-wrap w-dyn-item"
                style={{ opacity: 1 }}
              >
                <a href="/" className="business-article-heading">
                  {item}
                </a>
                <p className="paragraph-light">
                  We offer high-quality IT services at competitive rates,
                  ensuring that you receive exceptional value without
                  compromising on quality.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // CTA Section Component
  const CTASection = () => (
    <div className="section cc-cta">
      <div className="container">
        <div className="cta-wrap">
          <div>
            <div className="cta-text">
              <div className="heading-jumbo-small">
                <strong>Best Solution is the simplest IDEA!</strong>
              </div>
              <div className="paragraph-bigger cc-bigger-light">
                At Adiz Codez, we blend technical skill with creative innovation
                to deliver an exceptional coding education.
                <br />
              </div>
            </div>
            <a
              href="/contact"
              className="primary-button cc-jumbo-button w-inline-block"
            >
              <div>Start Now</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // // Footer Component
  // const Footer = () => (

  // );

  // Social Link Component

  return (
    <div>
      <IntroSection />
      <HomeContentWrap />
      <WhyJoinUs />
      <CTASection />
    </div>
  );
};
export default Home;
