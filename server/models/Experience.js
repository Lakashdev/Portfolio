// server/models/Experience.js
const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String },
  description: { type: String },
  technologies: [String]
});

module.exports = mongoose.model("Experience", experienceSchema);
