// models/education.model.js
const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  school: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  description: { type: String }
});

module.exports = mongoose.model('Education', educationSchema);
