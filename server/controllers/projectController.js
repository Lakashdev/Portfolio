const Project = require("../models/Project");

// GET all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new project
exports.createProject = async (req, res) => {
  const { title, description, githubLink, liveDemoLink, techStack, image } = req.body;

  try {
    const newProject = new Project({
      title,
      description,
      githubLink,
      liveDemoLink,
      techStack,
      image,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
