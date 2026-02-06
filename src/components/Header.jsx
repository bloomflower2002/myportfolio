import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si'; 
const Header = ({ activeSection, setActiveSection }) => {
  return (
    <header className="header-A">
      <div className="logo">
        <span className="logo-text">BONTU</span>
        <span className="logo-dot">.</span>
      </div>
      <nav className="nav-A">
        <button 
          className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
          onClick={() => setActiveSection('hero')}
        >
          HOME
        </button>
        <button 
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => setActiveSection('about')}
        >
          ABOUT
        </button>
        <button 
          className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveSection('projects')}
        >
          PROJECTS
        </button>
      </nav>
      <div className="social-header">
        <a href="https://www.instagram.com/misssoooo0/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/bontu-gidi-aa595b302/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.upwork.com/freelancers/~014ebd6f83714fa6ce" target="_blank" rel="noopener noreferrer" title="Upwork">
          <SiUpwork />
        </a>
        <a href="mailto:bloomflower2002@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
          <FaEnvelope />
        </a>
      </div>
    </header>
  );
};

export default Header;