import React, { useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

function AdminAddSkill() {
  const [form, setForm] = useState({
    name: "",
    iconClass: "",
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
      await axios.post("http://localhost:5000/api/techstack", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("Skill added successfully!");
      setForm({ name: "", iconClass: "" });
    } catch (err) {
      setMessage("Failed to add skill.");
    }
  };

  return (
    <AdminLayout>
      <h2 className="mb-4">Add New Tech Skill</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        {["name", "iconClass"].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label text-capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="form-control"
              placeholder={field === "iconClass" ? "e.g. fab fa-react" : ""}
              required
            />
          </div>
        ))}

        <button type="submit" className="btn btn-success">Add Skill</button>
        {message && <div className="alert alert-info mt-3">{message}</div>}
      </form>
    </AdminLayout>
  );
}

export default AdminAddSkill;
