import React from 'react';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Moya Restaurant E-commerce",
      description: "A full-featured restaurant e-commerce platform with online ordering, payment integration, and menu management",
      tech: ["React", "Node.js", "MYSQL", "Stripe", "Express"],
      url: "https://moyarestaurant.com/"
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description: "A dynamic and responsive portfolio platform that highlights my technical expertise, creative projects, and professional journey in web development",
      tech: ["React", "CSS3", "JavaScript", "Git"]
    }
  ];

  return (
    <section className="section-A active">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-number">02</span>
          MY PROJECTS
        </h2>
        <div className="title-line"></div>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-badge">
                {project.id === 1 ? "E-commerce" : "Portfolio"}
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span className="tech-tag" key={index}>{tech}</span>
              ))}
            </div>
            {project.url ? (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-view-btn"
              >
                View Project →
              </a>
            ) : (
              <a className="project-view-btn">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;