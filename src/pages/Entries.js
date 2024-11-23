
import React, { useState } from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions, Box } from '@mui/material';

function Entries() {
  const [entries, setEntries] = useState([
    { id: 1, date: '2024-11-12', mood: 'Happy', content: 'Had a productive day at work!' },
    { id: 2, date: '2024-11-11', mood: 'Stressed', content: 'Lots of deadlines coming up.' },
    //sample data but u can get this from api ??
  ]);

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Your Journal Entries
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ marginBottom: 3 }}
      >
        Add New Entry
      </Button>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        {entries.map(entry => (
          <Card key={entry.id} variant="outlined">
            <CardContent>

              <Typography variant="h6" component="h3">
                {entry.date}
              </Typography>
              
              <Typography variant="body2" color="text.secondary">
                Mood: {entry.mood}
              </Typography>

              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {entry.content}
              </Typography>
              
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Edit
              </Button>
              <Button size="small" color="error">
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Entries;
