
const About = () => {

  return (
    <div>
      <section className="hero-subscribe-right">
        <div className="container-3">
          <div className="hero-wrapper-2">
            <div className="hero-split-2">
              <img
                className="shadow-two-2"
                src={`${process.env.REACT_APP_PUBLIC_URL}/assets/img/service.jpeg`}
                alt="Service"
                style={{ opacity: 1 }}
                loading="lazy"
              />
            </div>
            <div className="hero-split-2">
              <h1 className="heading-2" style={{ opacity: 1 }}>
                Where Your Dreams Transform into Reality
              </h1>
              <p className="margin-bottom-24px-2" style={{ opacity: 1 }}>
                At our startup, we turn your visions into reality through innovation and collaborative teamwork.
              </p>
              <input type="button" href='/contact' className="button-primary-2 w-button" value="Get Started" />
            </div>
          </div>
        </div>
      </section>

      <div className="section cc-home-wrap">
        <div className="container">
          <div className="motto-wrap">
            <h2 className="heading-jumbo-small" style={{ opacity: 1 }}>
              We're a team of innovative tech enthusiasts dedicated to building solutions that change the world.
            </h2>
          </div>
          <div className="divider"></div>
          <div className="about-story-wrap">
            <p className="paragraph-light" style={{ opacity: 1 }}>
              Welcome to Adiz Codez, an innovative startup founded by Abdul Mubarak, a passionate entrepreneur and final-year BCA student. With a solid foundation in coding, Abdul envisions a company that excels in delivering top-notch IT and educational services alongside comprehensive business solutions.
              <br /><br />
              At Adiz Codez, we harness the power of creativity and collaboration. Our dedicated team combines diverse expertise to tackle challenges head-on, ensuring we deliver tailored programs that resonate with our clients' unique needs.
              <br /><br />
              Our approach merges advanced technology with a deep understanding of industry trends, enabling us to create solutions that exceed expectations. We are excited to embark on this journey with you, transforming your vision into reality and shaping a brighter future for everyone.
            </p>
          </div>
          <div className="divider"></div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="section-heading-wrap">
            <div className="label cc-light">What we are best at</div>
            <h2>The Best of Us</h2>
          </div>
          <div className="w-layout-grid our-services-grid">
            {services.map((service, index) => (
              <div key={index} className="service">
                <img src={service.img} width="50" alt={service.title} className="service-icon" />
                <div className="paragraph-bigger">{service.title}</div>
                <div className="paragraph-light">{service.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section cc-cta">
        <div className="container">
          <div className="cta-wrap">
            <div>
              <div className="cta-text">
                <h2 className="heading-jumbo-small">
                  <strong>Best Solution is the Simplest IDEA!</strong>
                </h2>
                <p className="paragraph-bigger cc-bigger-light">
                  At Adiz Codez, we blend technical skill with creative innovation to deliver exceptional coding education.
                </p>
              </div>
              <a href="/contact" className="primary-button cc-jumbo-button w-inline-block">
                <div>Start Now</div>
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

const services = [
  {
    img: `${process.env.REACT_APP_PUBLIC_URL}/assets/img/career.jpg`,
    title: 'Career Guidance',
    description: 'Providing expert counseling to help you successfully navigate your career journey.'
  },
  {
    img: `${process.env.REACT_APP_PUBLIC_URL}/assets/img/class.jpg`,
    title: 'Practicals',
    description: 'Offering engaging practical sessions designed to enhance hands-on skills and real-world application.'
  },
  {
    img: `${process.env.REACT_APP_PUBLIC_URL}/assets/img/event.jpg`,
    title: 'Events',
    description: 'Organizing impactful events that foster networking, learning, and professional development opportunities.'
  },
  {
    img: `${process.env.REACT_APP_PUBLIC_URL}/assets/img/Creativity.jpg`,
    title: 'Delight',
    description: 'Encouraging creativity to inspire innovative solutions and out-of-the-box thinking.'
  },
  {
    img: `${process.env.REACT_APP_PUBLIC_URL}/assets/img/assistance_22080135.jpg`,
    title: 'Assistance',
    description: 'Delivering personalized guidance tailored to your unique needs and aspirations.'
  },
  {
    img: `${process.env.REACT_APP_PUBLIC_URL}/assets/img/delight.jpg`,
    title: 'Delight',
    description: 'Ensuring client satisfaction through exceptional service and positive experiences at every touchpoint.'
  }
];


export default About;
