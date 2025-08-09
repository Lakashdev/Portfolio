const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");
const techStackRoutes = require('./routes/techStack');
const educationRoutes = require('./routes/educationRoutes');
const experienceRoutes = require('./routes/experienceRoute');
const achievementRoutes = require('./routes/acvhivementRoutes');


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

app.use('/api/techstack', techStackRoutes);

app.use('/api/education', educationRoutes);

app.use('/api/experience', experienceRoutes);
app.use('/api/achievements', achievementRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});