// Goals.js
import React, { useState } from 'react';
import '../styles/pages/Goals.css';

function Goals() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Journal Daily', status: 'In Progress' },
    { id: 2, title: 'Reflect on Positives Weekly', status: 'Completed' },
  ]);

  return (
    <div className="goals">
      <h2>Your Goals & Reminders</h2>
      <button>Add New Goal</button>
      <div className="goal-list">
        {goals.map(goal => (
          <div key={goal.id} className="goal-item">
            <h3>{goal.title}</h3>
            <p>Status: {goal.status}</p>
            <button>Mark as Complete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;
