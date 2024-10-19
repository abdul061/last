import React from 'react';

const Service = () => {
  const publicUrl = process.env.REACT_APP_PUBLIC_URL;

  const ArticleCard = ({ href, imgSrc, title, description }) => (
    <a href={href} className="udesly-article-card-small w-inline-block">
      <div className="udesly-image-wrapper udesly-article">
        <img
          className="udesly-image-cover"
          src={`${publicUrl}/${imgSrc}`}
          alt={title}
          style={{ opacity: 1 }}
          loading="lazy"
        />
      </div>
      <div className="udesly-article-detail udesly-n-padding">
        <div style={{ opacity: 1 }} className="udesly-block">
          <h4><strong>{title}</strong></h4>
          <p className="udesly-paragraph-medium udesly-text-color-neutral-500">
            {description}
          </p>
        </div>
      </div>
    </a>
  );

  const Banner = () => (
    <div className="udesly-banner">
      <div className="udesly-banner-wrapper">
        <div className="udesly-paragraph-small udesly-text-medium">
          Best solution is the simplest idea!...
                  </div>
        <div className="udesly-banner-buttons">
          <a href={`${publicUrl}/contact`} className="udesly-button-outlined-small w-button">More details</a>
          <a href={`${publicUrl}/contact`} className="udesly-button-close w-inline-block">
            <img src={`${publicUrl}/assets/img/cross.svg`} loading="lazy" alt="Close button" />
          </a>
        </div>
      </div>
    </div>
  );

  const ServiceCard = ({ href, imgSrc, title, description }) => (
    <a href={href} className="udesly-card-v-2 w-inline-block">
      <img
        loading="lazy"
        sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 85vw, 90vw"
        src={`${publicUrl}/${imgSrc}`}
        alt={title}
        className="udesly-image-cover"
      />
      <h3 className="udesly-heading udesly-3-columns">
        <strong>{title}</strong>
      </h3>
      <p className="udesly-paragraph-small">
        {description}
      </p>
    </a>
  );

  return (
    <>
      <section className="hero-heading-left">
        <div className="container-2">
          <div className="hero-wrapper">
            <div className="hero-split">
              <h1>Your vision shaped by our solutions.</h1>
              <p className="margin-bottom-24px">
                Your vision is our priority. We transform ideas into reality through innovative solutions that empower you to achieve lasting success.
              </p>
              <a href={`${publicUrl}/contact`} className="button-primary w-button">
                Get Started
              </a>
            </div>
            <div className="hero-split">
              <img
                src={`${publicUrl}/assets/img/about.svg`}
                loading="lazy"
                width="420"
                alt="Illustration about our services"
                className="shadow-two"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="udesly-container">
        <div className="w-layout-grid udesly-grid-two-column">
          <div className="udesly-column">
            <h2 className="udesly-text-extrabold">What made us special?</h2>
            <p className="udesly-paragraph-large">
              Our passion for design fuels the creation of innovative, user-friendly solutions that solve everyday challenges.
            </p>
            <a href={`${publicUrl}/contact`} className="udesly-button w-button">Contact us</a>
          </div>
          <div className="udesly-stats-wrapper">
            <div className="w-layout-grid udesly-stats-grid udesly-mt-32">
              <div className="udesly-stats-card">
                <div className="udesly-icon-block-medium">
                  <img src={`${publicUrl}/assets/img/class.jpg`} loading="lazy" alt="Inspiring" />
                </div>
                <h5 className="udesly-udesly-text-semibold">Inspiring</h5>
              </div>
              <div className="udesly-stats-card">
                <div className="udesly-icon-block-medium">
                  <img src={`${publicUrl}/assets/img/delight.jpg`} loading="lazy" alt="Streamlined" />
                </div>
                <h5 className="udesly-udesly-text-semibold">Streamlined</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="udesly-section">
        <div className="udesly-article-wrapper">
          <a href={`${publicUrl}/service`} className="udesly-article-card w-inline-block">
            <div className="udesly-image-wrapper">
              <img
                className="resize-img"
                src={`${publicUrl}/assets/img/focused.jpg`}
                width="100"
                height="100"
                alt="Focused"
                loading="lazy"
              />
            </div>
            <div className="udesly-article-detail udesly-mb-24">
              <h3><strong className="bold-text">Tech-classes</strong></h3>
              <p className="paragraph-2">
                Learn coding and technology skills through interactive classes that inspire creativity.
              </p>
            </div>
          </a>

          <div className="div-block-3">
            <ArticleCard
              href={`${publicUrl}/workshops`}
              imgSrc="assets/img/success.jpg"
              title="Workshops"
              description="Enhance your skills with our interactive and engaging workshops."
            />
            <ArticleCard
              href={`${publicUrl}/events`}
              imgSrc="assets/img/function.jpg"
              title="Events"
              description="Network with industry leaders at our engaging tech events."
            />
            <ArticleCard
              href={`${publicUrl}/training`}
              imgSrc="assets/img/teaching.jpg"
              title="Professional Training"
              description="Achieve your career goals with our dynamic training sessions."
            />
          </div>
        </div>

        <Banner />

        <div className="udesly-section">
          <div className="w-layout-grid udesly-cards-grid udesly-3-columns">
            <ServiceCard
              href={`${publicUrl}/web-development`}
              imgSrc="assets/img/web_dev.jpeg"
              title="Web-Development"
              description="We listen to your needs and craft websites that fulfill your vision."
            />
            <ServiceCard
              href={`${publicUrl}/app-development`}
              imgSrc="assets/img/app_dev.jpg"
              title="App-Development"
              description="We turn your app ideas into reality, focusing on user satisfaction."
            />
            <ServiceCard
              href={`${publicUrl}/project-management`}
              imgSrc="assets/img/work.jpg"
              title="Project Management"
              description="We guide your projects from start to finish."
            />
            <ServiceCard
              href={`${publicUrl}/internship`}
              imgSrc="assets/img/internship.jpg"
              title="Internship Program"
              description="We offer internships that bridge the gap between education and real-world experience."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
