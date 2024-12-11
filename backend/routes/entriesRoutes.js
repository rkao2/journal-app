// POST - Create a new entry
router.post('/', async (req, res) => {
  const { date, mood, content } = req.body;
  const newEntry = new Entry({ date, mood, content });
  try {
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT - Update an entry
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { date, mood, content } = req.body;
  try {
    const updatedEntry = await Entry.findByIdAndUpdate(id, { date, mood, content }, { new: true });
    if (!updatedEntry) return res.status(404).json({ message: 'Entry not found' });
    res.status(200).json(updatedEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Delete an entry
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEntry = await Entry.findByIdAndDelete(id);
    if (!deletedEntry) return res.status(404).json({ message: 'Entry not found' });
    res.status(200).json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
