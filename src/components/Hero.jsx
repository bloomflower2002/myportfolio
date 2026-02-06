import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = ({ setActiveSection }) => {
  return (
    <section className="hero-A active">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="text-gradient">FULLSTACK</span>
            <span className="text-outline">DEVELOPER</span>
          </h1>
          <p className="hero-subtitle">
            I BUILD <span className="highlight">DIGITAL EXPERIENCES</span> THAT 
            BLEND <span className="highlight">CREATIVITY</span> WITH 
            <span className="highlight"> TECHNOLOGY</span>
          </p>
          <p className="hero-description">
            Passionate about transforming ideas into reality through code and design. 
            Specializing in creating immersive web experiences with cutting-edge technologies.
          </p>
          <div className="hero-cta">
            <button className="cta-primary" onClick={() => setActiveSection('projects')}>
              EXPLORE MY WORK <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="window-title">portfolio.js</div>
            </div>
            <div className="code-content">
              <pre>
{`const bontu = {
  role: "Full-Stack Developer",
  skills: ["React", "JavaScript", "node.js", "CSS", "MYSQL"],
  passion: "Turning ideas into reality",
  motto: "Code with creativity, design with purpose"
};

function createMagic() {
  return innovation + creativity;
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;