import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
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
  );
}

export default Sidebar;
