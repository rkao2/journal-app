

import React from 'react';

function MainDashboard() {
  return (
    <div className="dashboard">
      <nav className="top-nav">
        <a href="#home">Home</a>
        <a href="#entries">Entries</a>
        <a href="#analytics">Analytics</a>
        <a href="#goals">Goals & Reminders</a>
        <a href="#settings">Settings</a>
        <input type="text" placeholder="Search entries..." />
        <div className="profile-icon">Profile</div>
      </nav>
      <Sidebar />
      {/* Page Content */}
    </div>
  );
}

export default MainDashboard;
