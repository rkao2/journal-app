const express = require('express');
const router = express.Router();
const Entry = require('../models/entryModel'); // Import the Entry model

// Get all journal entries
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find(); // Find all entries in the database
    res.json(entries); // Return entries as JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new journal entry
router.post('/', async (req, res) => {
  const { date, mood, content } = req.body;

  try {
    const newEntry = new Entry({
      date,
      mood,
      content,
    });

    await newEntry.save(); // Save the new entry to the database
    res.status(201).json(newEntry); // Return the saved entry
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an existing journal entry by ID (PUT request)
router.put('/:id', async (req, res) => {
  try {
    const { date, mood, content } = req.body;
    const updatedEntry = await Entry.findByIdAndUpdate(
      req.params.id, // ID of the entry to update
      { date, mood, content }, // Fields to update
      { new: true } // Return the updated entry
    );
    
    if (!updatedEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    res.json(updatedEntry); // Return the updated entry
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a journal entry by ID (DELETE request)
router.delete('/:id', async (req, res) => {
  try {
    const deletedEntry = await Entry.findByIdAndDelete(req.params.id); // Find and delete entry by ID
    
    if (!deletedEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    res.json({ message: 'Entry deleted', deletedEntry }); // Return a success message
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
