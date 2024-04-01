import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis React Router
import "./1.Header.css"; // Assurez-vous que le chemin est correct

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/solutions">Solutions</Link></li>
        </ul>
      </div>
      <div className="navbar-center">
        <Link to="/" className="navbar-logo">ENSEM-GLD</Link>
      </div>
      <div className="navbar-right">
        <Link to="/login">Login</Link> {/* Assurez-vous que l'URL est correcte */}
      </div>
    </nav>
  );
};

export default Header;
