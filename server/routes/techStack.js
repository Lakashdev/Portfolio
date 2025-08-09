// routes/techStack.js

const express = require("express");
const router = express.Router();
const { createTechStack, getAllTechStacks } = require('../controllers/techStackController');

router.post("/", createTechStack);
router.get('/', getAllTechStacks);

module.exports = router;
