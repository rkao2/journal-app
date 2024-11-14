// Settings.js
import React from 'react';

function Settings() {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="account-settings">
        <h3>Account Settings</h3>
        <button>Change Password</button>
        <button>Update Email</button>
      </div>
      <div className="privacy-settings">
        <h3>Privacy Preferences</h3>
        <label>
          <input type="checkbox" /> Make my entries private by default
        </label>
      </div>
      <div className="notifications-settings">
        <h3>Notifications</h3>
        <label>
          <input type="checkbox" /> Receive daily reminders
        </label>
      </div>
    </div>
  );
}

export default Settings;
