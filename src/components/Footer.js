
// Footer.js
import React from 'react';
import '../styles/components/Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 AuraNotes</p>
      <div>
        <a href="#privacy">Privacy Policy</a> | 
        <a href="#terms">Terms of Service</a> | 
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
