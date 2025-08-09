import React, { useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

function AdminAddProject() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    githubLink: "",
    liveDemoLink: "",
    techStack: "",
    image: "",
  });

  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await axios.post("http://localhost:5000/api/projects", {
        ...form,
        techStack: form.techStack.split(",").map((t) => t.trim()),
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("Project added successfully!");
      setForm({
        title: "",
        description: "",
        githubLink: "",
        liveDemoLink: "",
        techStack: "",
        image: "",
      });
    } catch (err) {
      setMessage("Failed to add project.");
    }
  };

  return (
    <AdminLayout>
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        {["title", "description", "githubLink", "liveDemoLink", "techStack", "image"].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field}</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Add Project</button>
        {message && <p className="mt-3">{message}</p>}
      </form>
    </AdminLayout>
  );
}

export default AdminAddProject;
