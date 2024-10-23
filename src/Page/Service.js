import React from "react";
const publicUrl = process.env.REACT_APP_PUBLIC_URL;
const Service = () => {
  const ArticleCard = ({ href, imgSrc, title, description }) => (
    <a href={href} className="udesly-article-card-small w-inline-block">
      <div className="udesly-image-wrapper udesly-article">
        <img
          className="udesly-image-cover"
          src={imgSrc}
          alt=""
          style={{ opacity: 1 }}
          loading="lazy"
        />
      </div>
      <div className="udesly-article-detail udesly-n-padding">
        <div style={{ opacity: 1 }} className="udesly-block">
          <h4>
            <strong>{title}</strong>
          </h4>
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
          <a
            href={`${publicUrl}/contact`}
            className="udesly-button-outlined-small w-button"
          >
            More details
          </a>
          <a href="/contact" className="udesly-button-close w-inline-block">
            <img src="assets/img/cross.svg" loading="lazy" alt="" />
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
        src={imgSrc}
        alt=""
        className="udesly-image-cover"
      />
      <h3 className="udesly-heading udesly-3-columns">
        <strong>{title}</strong>
      </h3>
      <p className="udesly-paragraph-small">{description}</p>
    </a>
  );
  return (
    <>
      <section className="hero-heading-left">
        <div className="container-2">
          <div className="hero-wrapper">
            <div className="hero-split">
              <h1
                data-w-id="cb6393fb-22a4-717e-7700-b02632013eca"
                style={{
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  opacity: 1,
                }}
              >
                Your vision shaped by our solutions.
              </h1>
              <p
                data-w-id="cb6393fb-22a4-717e-7700-b02632013ecc"
                style={{
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  opacity: 1,
                }}
                className="margin-bottom-24px"
              >
                Your vision is our priority. We transform ideas into reality
                through innovative solutions that empower you to achieve lasting
                success.
              </p>
              <a
                data-w-id="cb6393fb-22a4-717e-7700-b02632013ece"
                style={{
                  transform:
                    "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  opacity: 1,
                }}
                href="/contact"
                className="button-primary w-button"
              >
                Get Started
              </a>
            </div>
            <div className="hero-split">
              <img
                src="assets/img/about.svg"
                loading="lazy"
                width="420"
                style={{ opacity: 1 }}
                alt="Illustration about our services"
                data-w-id="cb6393fb-22a4-717e-7700-b02632013ed1"
                className="shadow-two"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="udesly-container">
        <div className="w-layout-grid udesly-grid-two-column">
          <div
            id="w-node-_3818a629-e4e5-ee45-a87a-e7286e00b10b-33987cf7"
            className="udesly-column"
          >
            <h2
              data-w-id="3818a629-e4e5-ee45-a87a-e7286e00b10c"
              style={{
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                opacity: 1,
              }}
              className="udesly-text-extrabold"
            >
              What made us special?
            </h2>
            <p className="udesly-paragraph-large">
              Our passion for design fuels the creation of innovative,
              user-friendly solutions that solve everyday challenges.
            </p>
            <div
              data-w-id="3818a629-e4e5-ee45-a87a-e7286e00b110"
              style={{
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                opacity: 1,
              }}
              className="udesly-button-wrapper"
            >
              <a href="/contact" className="udesly-button w-button">
                Contact us
              </a>
            </div>
          </div>
          <div
            id="w-node-_3818a629-e4e5-ee45-a87a-e7286e00b113-33987cf7"
            className="udesly-stats-wrapper"
          >
            <div className="w-layout-grid udesly-stats-grid udesly-mt-32">
              <div
                id="w-node-_3818a629-e4e5-ee45-a87a-e7286e00b115-33987cf7"
                data-w-id="3818a629-e4e5-ee45-a87a-e7286e00b115"
                style={{ opacity: 1 }}
                className="udesly-stats-card"
              >
                <div className="udesly-icon-block-medium">
                  <img
                    src={`${publicUrl}/assets/img/class.jpg`}
                    loading="lazy"
                    alt="Inspiring"
                  />
                </div>
                <div className="udesly-block">
                  <h5 className="udesly-udesly-text-semibold">Inspiring</h5>
                </div>
              </div>
              <div
                id="w-node-_3818a629-e4e5-ee45-a87a-e7286e00b11d-33987cf7"
                data-w-id="3818a629-e4e5-ee45-a87a-e7286e00b11d"
                style={{ opacity: 1 }}
                className="udesly-stats-card"
              >
                <div className="udesly-icon-block-medium">
                  <img
                    src={`${publicUrl}/assets/img/delight.jpg`}
                    loading="lazy"
                    alt="Streamlined"
                  />
                </div>
                <div className="udesly-block">
                  <h5 className="udesly-udesly-text-semibold">Streamlined</h5>
                </div>
              </div>
            </div>
            <div className="w-layout-grid udesly-stats-grid">
              <div
                id="w-node-_3818a629-e4e5-ee45-a87a-e7286e00b126-33987cf7"
                data-w-id="3818a629-e4e5-ee45-a87a-e7286e00b126"
                style={{ opacity: 1 }}
                className="udesly-stats-card"
              >
                <div className="udesly-icon-block-medium">
                  <img
                    src={`${publicUrl}/assets/img/lazy.svg`}
                    loading="lazy"
                    alt="Inventive"
                  />
                </div>
                <div className="udesly-block">
                  <h5 className="udesly-udesly-text-semibold">Inventive</h5>
                </div>
              </div>
              <div
                id="w-node-_3818a629-e4e5-ee45-a87a-e7286e00b12e-33987cf7"
                data-w-id="3818a629-e4e5-ee45-a87a-e7286e00b12e"
                style={{ opacity: 1 }}
                className="udesly-stats-card udesly-flex-top"
              >
                <div className="udesly-icon-block-medium">
                  <img
                    src={`${publicUrl}/assets/img/location.svg`}
                    loading="lazy"
                    alt="Clientele"
                  />
                </div>
                <div className="udesly-block">
                  <h5 className="udesly-udesly-text-semibold">Clientele</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="udesly-section">
        <div className="udesly-article-wrapper">
          <a
            id="w-node-b9bd4b73-78f7-8820-c414-b616e0d138c5-33987cf7"
            href="/service"
            className="udesly-article-card w-inline-block"
          >
            <div className="udesly-image-wrapper">
              <img
                className="resize-img"
                src={`${publicUrl}/assets/img/focused.jpg`}
                width="100"
                height="100"
                alt=""
                style={{ opacity: 1 }}
                sizes="(max-width: 479px) 100vw, (max-width: 991px) 72vw, 36vw"
                loading="lazy"
              />
            </div>
            <div className="udesly-article-detail udesly-mb-24">
              <div style={{ opacity: 1 }} className="udesly-block">
                <h3>
                  <strong className="bold-text">Tech-classes</strong>
                </h3>
                <p className="paragraph-2">
                  Learn coding and technology skills through interactive classes
                  that inspire creativity, encourage collaboration, and provide
                  real-world applications for all skill levels and engage
                  students with hands-on projects, expert guidance, a nd a
                  supportive community of learners.
                </p>
              </div>
            </div>
          </a>

          <div className="div-block-3">
            {/* Article Card 1 */}
            <ArticleCard
              href={`${publicUrl}/service`}
              imgSrc="assets/img/success.jpg"
              title="Workshops"
              description="Enhance your skills with our interactive and engaging workshops."
            />

            {/* Article Card 2 */}
            <ArticleCard
              href={`${publicUrl}/service`}
              imgSrc="assets/img/function.jpg"
              title="Events"
              description="Network with industry leaders at our engaging tech events."
            />

            {/* Article Card 3 */}
            <ArticleCard
              href={`${publicUrl}/service`}
              imgSrc="assets/img/teaching.jpg"
              title="Professional Training"
              description="Achieve your career goals with our dynamic training sessions."
            />
          </div>
        </div>

        <Banner />

        <div className="udesly-section">
          <div className="w-layout-grid udesly-cards-grid udesly-3-columns">
            {/* Card 1 */}
            <ServiceCard
              href={`${publicUrl}/service`}
              imgSrc="assets/img/web_dev.jpeg"
              title="Web-Development"
              description="We listen to your needs and craft websites that fulfill your vision."
            />
            <ServiceCard
              href={`${publicUrl}/contact`}
              imgSrc="assets/img/app_dev.jpg"
              title="App-Development"
              description="We turn your app ideas into reality, focusing on user satisfaction."
            />
            <ServiceCard
              href={`${publicUrl}/contact`}
              imgSrc="assets/img/work.jpg"
              title="Project Management"
              description="We guide your projects from start to finish."
            />
            <ServiceCard
              href={`${publicUrl}/contact`}
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
