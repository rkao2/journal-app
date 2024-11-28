import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function Entries() {
  const [entries, setEntries] = useState([]);
  const [open, setOpen] = useState(false);
  const [newEntry, setNewEntry] = useState({ date: '', mood: '', content: '' });

  // Fetch entries from the backend
  useEffect(() => {
    fetch('http://localhost:5001/api/entries')
      .then(response => response.json())
      .then(data => setEntries(data));
  }, []);

  // Handle dialog open/close
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle adding a new entry
  const handleAddEntry = () => {
    fetch('http://localhost:5001/api/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEntry),
    })
      .then(response => response.json())
      .then(data => {
        setEntries([...entries, data]);
        handleClose();
        setNewEntry({ date: '', mood: '', content: '' }); // Reset form
      });
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4, padding: "60px" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Your Journal Entries
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ marginBottom: 3 }}
        onClick={handleClickOpen}
      >
        Add New Entry
      </Button>

      {/* Add New Entry Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Entry</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Date (YYYY-MM-DD)"
            type="date"
            fullWidth
            variant="outlined"
            value={newEntry.date}
            onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="dense"
            label="Mood"
            fullWidth
            variant="outlined"
            value={newEntry.mood}
            onChange={(e) => setNewEntry({ ...newEntry, mood: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Content"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={newEntry.content}
            onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddEntry} color="primary">
            Add Entry
          </Button>
        </DialogActions>
      </Dialog>

      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
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
