import React, { useState } from 'react';
import { Button, Typography, Box, Grid2 } from '@mui/material';

function Goals() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Journal Daily', status: 'In Progress' },
    { id: 2, title: 'Reflect on Positives Weekly', status: 'Completed' },
  ]);

  const handleAddGoal = () => {
    // Add functionality for adding a new goal
  };

  const handleMarkComplete = (id) => {
    setGoals(prevGoals =>
      prevGoals.map(goal =>
        goal.id === id ? { ...goal, status: 'Completed' } : goal
      )
    );
  };

  return (
    <Box className="goals" sx={{ padding: 2, zIndex: 1, marginTop: 8 }}>
      <Typography variant="h4" gutterBottom>Your Goals & Reminders</Typography>
      <Button variant="contained" color="primary" onClick={handleAddGoal} sx={{zIndex: -1}}>
        Add New Goal
      </Button>
      <Grid2 container spacing={2} sx={{ marginTop: 2}}>
        {goals.map((goal) => (
          <Grid2 item xs={12} sm={6} md={4} key={goal.id}>
            <Box className="goal-item" sx={{ border: '1px solid #ddd', borderRadius: 2, padding: 2}}>
              <Typography variant="h6">{goal.title}</Typography>
              <Typography>Status: {goal.status}</Typography>
              {goal.status !== 'Completed' && (
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={() => handleMarkComplete(goal.id)} 
                  sx={{ marginTop: 1, zIndex: -1 }}
                >
                  Mark as Complete
                </Button>
              )}
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default Goals;
