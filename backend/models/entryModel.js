const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    mood: {
        type: String, // Could be a string like 'happy', 'sad', 'angry', etc.
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Entry', entrySchema);
