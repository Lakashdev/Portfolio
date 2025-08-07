import React, { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-6 mb-4" key={project._id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p><strong>Tech:</strong> {project.techStack.join(", ")}</p>
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm me-2">GitHub</a>
                )}
                {project.liveDemoLink && (
                  <a href={project.liveDemoLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
