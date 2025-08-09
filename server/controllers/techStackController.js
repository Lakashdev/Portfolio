const TechStack = require('../models/TechStack');

exports.createTechStack = async (req, res) => {
  const { name, iconClass } = req.body;
  try {
    const newSkill = await TechStack.create({ name, iconClass });
    res.status(201).json(newSkill);
  } catch (error) {
    console.error('Error creating tech stack:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ NEW: Get all tech stacks
exports.getAllTechStacks = async (req, res) => {
  try {
    const skills = await TechStack.find();
    res.json(skills);
  } catch (error) {
    console.error('Error fetching tech stacks:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
