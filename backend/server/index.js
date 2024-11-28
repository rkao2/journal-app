const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const entriesRoutes = require('./pages/entries'); // Import routes

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API is running. Use /api/entries for journal entries.');
});

// Use routes
app.use('/api/entries', entriesRoutes); // Routes defined in entries.js

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
