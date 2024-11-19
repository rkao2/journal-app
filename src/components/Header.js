import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>AuroNotes</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <NavLink to="/home" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/entries" activeClassName="active-link">
              Entries
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" activeClassName="active-link">
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active-link">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
