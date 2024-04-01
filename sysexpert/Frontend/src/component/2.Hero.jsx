import React from 'react';
import './2.Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src="./image digno.jpg" alt="System Diagnostic Image" />
      </div>
      <div className="hero-content">
        <div className="hero-text-left">
          <h1 className='h1'>Powerful Computer Diagnostic Tool for Accurate Troubleshooting</h1>
          <p className='p'>Efficiently diagnose computer issues and identify faulty components with our advanced diagnostic system.</p>
        </div>
        <div className="hero-text-right">
          <Link to="/forms" className="btn-black">Get Started</Link>
          <Link to="/learnmore" className="btn-white">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
