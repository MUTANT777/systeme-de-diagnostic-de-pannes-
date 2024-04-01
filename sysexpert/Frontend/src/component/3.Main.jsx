import React from 'react';
import './3.Main.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <section className="main">
      <div className="block">
        <div className="icon">
          <img src="./cube.png" alt="Cube Icon" />
        </div>
        <h3>How to use Our Diagnostic Tool</h3>
        <p>Input your computer symptoms and answer a questionnaire for more accurate results.</p>
        <div className="buttons">
          <Link to="/forms" className="btn-black">Get Started</Link>
          <Link to="/learnmore" className="btn-white">Learn More</Link>
        </div>
      </div>
      <div className="block">
        <div className="icon">
          <img src="./cube.png" alt="Cube Icon" />
        </div>
        <h1>Receive Your Diagnosis</h1>
        <p>Get the results of the diagnostic tool and find out which hardware component is faulty.</p>
        <div className="buttons">
          <Link to="/forms" className="btn-black">Get Started</Link>
          <Link to="/learnmore" className="btn-white">Learn More</Link>
        </div>
      </div>
      <div className="block">
        <div className="icon">
          <img src="./cube.png" alt="Cube Icon" />
        </div>
        <h3>Find Solutions for Your Computer</h3>
        <p>Discover recommended solutions to fix the faulty hardware component and get your computer back on track.</p>
        <div className="buttons">
          <Link to="/forms" className="btn-black">Get Started</Link>
          <Link to="/learnmore" className="btn-white">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

export default Main;
