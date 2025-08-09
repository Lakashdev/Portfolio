// models/TechStack.js

const mongoose = require("mongoose");

const techStackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  iconClass: { type: String, required: true },
});

module.exports = mongoose.model("TechStack", techStackSchema);
