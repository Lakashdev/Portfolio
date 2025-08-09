const Education = require('../models/Education');

// Create
exports.createEducation = async (req, res) => {
  try {
    const newEducation = new Education(req.body);
    const saved = await newEducation.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read All
exports.getAllEducation = async (req, res) => {
  try {
    const all = await Education.find();
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateEducation = async (req, res) => {
  try {
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteEducation = async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: 'Education deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
