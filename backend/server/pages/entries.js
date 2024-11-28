const express = require('express');
const router = express.Router();

let entries = [
  { id: 1, date: '2024-11-12', mood: 'Happy', content: 'Had a productive day at work!' },
  { id: 2, date: '2024-11-11', mood: 'Stressed', content: 'Lots of deadlines coming up.' },
];

// Fetch all entries
router.get('/', (req, res) => {
  res.json(entries);
});

// Add a new entry
router.post('/', (req, res) => {
  const { date, mood, content } = req.body;
  const newEntry = {
    id: entries.length + 1,
    date,
    mood,
    content,
  };
  entries.push(newEntry);
  res.status(201).json(newEntry);
});

module.exports = router;
