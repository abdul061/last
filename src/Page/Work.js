import React from 'react';

const Work = () => {
  const projects = [
    {
      id: 1,
      link: 'Project1.html',
      image: `${process.env.REACT_APP_PUBLIC_URL}/assets/img/sscms.png`,
      name: 'Project #1',
      description: 'Student Study Center Management System',
    },
    {
      id: 2,
      link: 'project2.html',
      image: `${process.env.REACT_APP_PUBLIC_URL}/assets/img/vr_hr.png`,
      name: 'Project #2',
      description: 'Virtual HR',
    },
    {
      id: 3,
      link: 'project3.html',
      image: `${process.env.REACT_APP_PUBLIC_URL}/assets/img/ems.png`,
      name: 'Project #3',
      description: 'Evidence Storing in BLOCK-CHAIN',
    },
  ];

  return (
    <div>
      <div className="section cc-home-wrap">
        <div
          data-w-id="a8d60f8e-6e85-32a9-556d-4c7df1461f7d"
          style={{ opacity: 1 }}
          className="intro-header cc-subpage"
        >
          <div className="intro-content">
            <div className="heading-jumbo">Our works<br /></div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="section-heading-wrap">
            <div className="label cc-light">Our Work</div>
            <h2>Team projects</h2>
          </div>
          <div className="w-layout-grid projects-grid">
            {projects.map(project => (
              <div key={project.id}>
                <a href={project.link} className="project-cover-link w-inline-block">
                  <img
                    className="project-cover-pic"
                    src={project.image}
                    alt={project.name}
                    style={{
                      transform: 'translate3d(0, 15px, 0) scale3d(1, 1, 1)',
                      opacity: 1,
                    }}
                    sizes="(max-width: 991px) 94vw, 95vw"
                  />
                </a>
                <div className="project-name-wrap">
                  <a href={project.link} className="project-name-link">{project.name}</a>
                  <div className="paragraph-light">{project.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        data-w-id="6b3b7785-d872-c313-8cb2-d9ee8f79f15f"
        className="section cc-cta"
      >
        <div className="container">
          <div className="cta-wrap">
            <div>
              <div className="cta-text">
                <div className="heading-jumbo-small">
                  <strong>Best Solution is the simplest IDEA!</strong>
                </div>
                <div className="paragraph-bigger cc-bigger-light">
                  At Adiz Codez, we blend technical skill with creative innovation to deliver an exceptional coding education.<br />
                </div>
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

export default Work;
