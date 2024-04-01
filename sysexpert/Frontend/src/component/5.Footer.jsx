import React from 'react';
import "./5.Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Diagnostic System. All rights reserved.</p>
        <p>Designed by YourName</p>
      </div>
    </footer>
  );
}

export default Footer;
