const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organization: String,
  date: String,
  description: String,
});

module.exports = mongoose.model('Achievement', achievementSchema);
