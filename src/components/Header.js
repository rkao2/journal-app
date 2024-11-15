// Header.js
import React from 'react';
import '../styles/components/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>AuroNotes</h1>
      </div>
      <nav>
        <button>Sign In</button>
        <button>Sign Up</button>
      </nav>
    </header>
  );
}

export default Header;
