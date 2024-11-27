import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
//import '../styles/components/Header.css';

function Header() {
  return (
    /**
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

  **/

  /**
   * USING MUI to style the header 
   */
  <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AuraNotes
        </Typography>
        <Button color="inherit" component={NavLink} to="/home">Home</Button>
        <Button color="inherit" component={NavLink} to="/entries">Entries</Button>
        <Button color="inherit" component={NavLink} to="/analytics">Analytics</Button>
        <Button color="inherit" component={NavLink} to="/settings">Settings</Button>
      </Toolbar>
    </AppBar>
  );

}

export default Header;
