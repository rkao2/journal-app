
// Entries.js
import React, { useState } from 'react';
import '../styles/pages/Entries.css';

function Entries() {
  const [entries, setEntries] = useState([
    { id: 1, date: '2024-11-12', mood: 'Happy', content: 'Had a productive day at work!' },
    { id: 2, date: '2024-11-11', mood: 'Stressed', content: 'Lots of deadlines coming up.' },
    // Sample entries; these could come from a database or API
  ]);

  return (
    <div className="entries">
      <h2>Your Journal Entries</h2>
      <button>Add New Entry</button>
      <div className="entry-list">
        {entries.map(entry => (
          <div key={entry.id} className="entry-item">
            <h3>{entry.date}</h3>
            <p>Mood: {entry.mood}</p>
            <p>{entry.content}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Entries;
