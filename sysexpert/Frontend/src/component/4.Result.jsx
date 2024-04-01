import React from 'react';
import './4.Result.css';
import { Link } from 'react-router-dom';
const Result = () => {
  return (
    <section className="result">
      <div className="result-left">
        <img src="diagno2.jpg" alt="Diagnostic Tool" />
      </div>
      <div className="result-right">
        <h1>Start diagnosing computer issues now</h1>
        <h3>Use our diagnostic tool to identify and fix hardware problems with your computer.</h3>
        <div className="buttons">
          <Link to="/forms" className="btn-black">Get Started</Link>
          <Link to="/learnmore" className="btn-white">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

export default Result;
