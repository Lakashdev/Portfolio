const express = require("express");
const router = express.Router();
const {
  getProjects,
  createProject,
} = require("../controllers/projectController");
const verifyToken = require("../middleware/authMiddleware");

router.get("/", getProjects);

//middle ware to protect the route
router.post("/", verifyToken, createProject);



module.exports = router;
