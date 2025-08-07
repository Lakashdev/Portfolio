import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

function AdminProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <AdminLayout>
      <h2>All Projects</h2>
      <div className="row">
        {projects.map((p) => (
          <div className="col-md-4 mb-3" key={p._id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>{p.title}</h5>
                <p>{p.description}</p>
                <p><strong>Tech:</strong> {p.techStack.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

export default AdminProjects;
