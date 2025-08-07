const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
    },
    liveDemoLink: {
      type: String,
    },
    techStack: [String], // Array of technologies
    image: {
      type: String, // You can use Cloudinary or static folder later
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
