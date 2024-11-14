// Header.js
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Your App Logo</h1>
      </div>
      <nav>
        <button>Sign In</button>
        <button>Sign Up</button>
      </nav>
    </header>
  );
}

export default Header;
