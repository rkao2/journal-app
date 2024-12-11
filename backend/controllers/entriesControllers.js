const Entry = require('../models/entryModel');

// Get all entries
const getEntries = async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new entry
const addEntry = async (req, res) => {
  const { date, mood, content } = req.body;
  try {
    const newEntry = new Entry({ date, mood, content });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an entry
const deleteEntry = async (req, res) => {
  try {
    const entry = await Entry.findByIdAndDelete(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getEntries, addEntry, deleteEntry };
