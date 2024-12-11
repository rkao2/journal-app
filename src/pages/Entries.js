import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions, Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function Entries() {
  const [entries, setEntries] = useState([]);
  const [open, setOpen] = useState(false);
  const [newEntry, setNewEntry] = useState({ date: '', mood: '', content: '' });
  const [editEntry, setEditEntry] = useState(null);  // Track the entry being edited

  // Fetch entries from the backend
  useEffect(() => {
    fetch('http://localhost:5001/api/entries')
      .then(response => response.json())
      .then(data => setEntries(data))
      .catch(error => console.error('Error fetching entries:', error));
  }, []);

  // Handle dialog open/close
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle adding a new entry
  const handleAddEntry = () => {
    fetch('http://localhost:5001/api/entries', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' },
      body: JSON.stringify(newEntry),
    })
      .then(response => response.json())
      .then(data => {
        setEntries([...entries, data]);
        handleClose();
        setNewEntry({ date: '', mood: '', content: '' }); // Reset form
      })
      .catch(error => console.error('Error adding entry:', error));
  };

  // Handle deleting an entry
  const handleDeleteEntry = (id) => {
    fetch(`http://localhost:5001/api/entries/${id}`, {  // Ensure correct ID is used
      method: 'DELETE',
    })
      .then(() => {
        setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id)); // Delete the specific entry
      })
      .catch(error => console.error('Error deleting entry:', error));
  };

  // Handle editing an entry
  const handleEditEntry = (entry) => {
    setEditEntry(entry); // Set entry to be edited
    setNewEntry(entry);  // Pre-fill form with existing entry data
    handleClickOpen();    // Open dialog for editing
  };

  // Handle saving an edited entry
  const handleSaveEdit = () => {
    fetch(`http://localhost:5001/api/entries/${editEntry.id}`, {  // Use correct ID here
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEntry),
    })
      .then(response => response.json())
      .then(data => {
        setEntries(prevEntries => 
          prevEntries.map(entry => 
            entry.id === data.id ? data : entry // Only update the edited entry
          )
        );
        handleClose();
        setEditEntry(null);  // Reset edit state
        setNewEntry({ date: '', mood: '', content: '' }); // Reset form
      })
      .catch(error => console.error('Error saving edit:', error));
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

      {/* Add/Edit Entry Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editEntry ? 'Edit Entry' : 'Add New Entry'}</DialogTitle>
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
          
          {/* Mood Dropdown */}
          <FormControl fullWidth margin="dense">
            <InputLabel>Mood</InputLabel>
            <Select
              label="Mood"
              value={newEntry.mood}
              onChange={(e) => setNewEntry({ ...newEntry, mood: e.target.value })}
            >
              <MenuItem value="happy">Happy</MenuItem>
              <MenuItem value="sad">Sad</MenuItem>
              <MenuItem value="angry">Angry</MenuItem>
              <MenuItem value="neutral">Neutral</MenuItem>
              <MenuItem value="excited">Excited</MenuItem>
            </Select>
          </FormControl>

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
          <Button onClick={editEntry ? handleSaveEdit : handleAddEntry} 
            color="primary">
            {editEntry ? 'Save Edit' : 'Add Entry'}
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
              <Button size="small" color="primary" onClick={() => handleEditEntry(entry)}>
                Edit
              </Button>
              <Button size="small" color="error" onClick={() => handleDeleteEntry(entry.id)}>
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
