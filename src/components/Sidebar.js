import React, { useState } from 'react';
import '../styles/components/Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle button */}
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <h3>Quick Navigation</h3>
        <ul>
          <li>Daily View</li>
          <li>Weekly View</li>
          <li>Monthly View</li>
        </ul>
        <h3>Tags and Categories</h3>
        <ul>
          <li>Mood: Happy</li>
          <li>Mood: Anxious</li>
          {/* Additional tags */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
