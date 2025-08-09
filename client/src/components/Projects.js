import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

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

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid py-5" id="projects" style={{ minHeight: '100vh', color: '#fff', backgroundColor: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 className="text-center mb-4 fw-bold" style={{ color: '#00ff88' }}>My Projects</h2>

      <div className="row justify-content-center">
      {currentProjects.map((project, index) => (
      <div key={project._id} className="col-md-4 mb-4" style={{justifyContent: 'center' }}>
        <div className="bg-dark p-4 rounded h-100 border border-success">
          <h4 style={{ color: '#00ff88' }}>{project.title}</h4>
          <p>{project.description}</p>
          <p><strong>Tech:</strong> {project.techStack.join(', ')}</p>
          {project.githubLink && (
            <a href={project.githubLink} className="btn btn-outline-success me-2" target="_blank" rel="noreferrer">GitHub</a>
          )}
          {project.liveDemoLink && (
            <a href={project.liveDemoLink} className="btn btn-outline-info" target="_blank" rel="noreferrer">Live Demo</a>
          )}
        </div>
      </div>
    ))}
  </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination pagination-sm">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              >
                <button
                  className="page-link btn-success"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Projects;
