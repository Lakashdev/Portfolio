// server/routes/experience.js
const express = require("express");
const router = express.Router();
const { createExperience, getExperiences, deleteExperience } = require("../controllers/experienceController");

router.post("/", createExperience);
router.get("/", getExperiences);
router.delete("/:id", deleteExperience);

module.exports = router;
