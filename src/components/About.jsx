import React from 'react';

const About = () => {
  return (
    <section className="section-A active">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-number">01</span>
          Hey I am Bontu!
        </h2>
        <div className="title-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <div className="about-description">
            <p>
              I am a Full-Stack developer working independently as a freelancer. 
              My expertise lies in developing e-commerce platforms.
            </p>
            <p>
              I believe in growing step by step and love turning my ideas into something real. 
              Whether it's exploring new places, coming up with fresh ideas, or simply enjoying 
              a good series, I'm always finding ways to stay inspired and have fun.
            </p>
            <p>
              My journey in tech is driven by a passion for creating digital experiences 
              that not only look great but also solve real problems.
            </p>
          </div>
        </div>
        <div className="about-image">
          <div className="image-frame">
            <div className="image-overlay">
            <img 
              src="/pp.jpg" 
              alt="Bontu - Full Stack Developer" 
              className="profile-image"
            /></div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;