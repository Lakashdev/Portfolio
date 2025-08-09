import React, { useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

function AdminAddExperience() {
  const [form, setForm] = useState({
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
    technologies: "", // comma-separated
  });

  const [status, setStatus] = useState({ type: "", msg: "" });
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    // shape payload for API
    const payload = {
      company: form.company.trim(),
      role: form.role.trim(),
      startDate: form.startDate.trim(),
      endDate: form.endDate.trim(),
      description: form.description.trim(),
      technologies: form.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    try {
      await axios.post("http://localhost:5000/api/experience", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStatus({ type: "success", msg: "Experience added successfully!" });
      setForm({
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
        technologies: "",
      });
    } catch (err) {
      const apiMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Failed to add experience.";
      setStatus({ type: "error", msg: apiMsg });
    }
  };

  return (
    <AdminLayout>
      <div className="container py-4">
        <h2 className="mb-4">Add Experience</h2>

        {status.msg && (
          <div
            className={`alert ${
              status.type === "success" ? "alert-success" : "alert-danger"
            }`}
          >
            {status.msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: 720 }}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Company *</label>
              <input
                type="text"
                className="form-control"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="e.g., Innovative Solutions Pvt. Ltd."
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Role / Title *</label>
              <input
                type="text"
                className="form-control"
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="e.g., Full-stack Developer"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Start Date *</label>
              <input
                type="month"
                className="form-control"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">End Date</label>
              <input
                type="month"
                className="form-control"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                placeholder="leave empty for Present"
              />
              <div className="form-text">Leave empty if currently working.</div>
            </div>

            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                rows="4"
                value={form.description}
                onChange={handleChange}
                placeholder="Short summary of responsibilities, achievements, impact…"
              />
            </div>

            <div className="col-12">
              <label className="form-label">Technologies (comma-separated)</label>
              <input
                type="text"
                className="form-control"
                name="technologies"
                value={form.technologies}
                onChange={handleChange}
                placeholder="React, Node.js, MongoDB, Docker"
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success">
                Add Experience
              </button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AdminAddExperience;
