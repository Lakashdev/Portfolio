import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div>
      <h2>My Projects</h2>
      {projects.map((project) => (
        <div key={project._id} style={{ border: "1px solid gray", marginBottom: "1rem", padding: "1rem" }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Tech:</strong> {project.techStack.join(', ')}
          </p>
          {project.githubLink && (
            <p>
              <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
            </p>
          )}
          {project.liveDemoLink && (
            <p>
              <a href={project.liveDemoLink} target="_blank" rel="noreferrer">Live Demo</a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
