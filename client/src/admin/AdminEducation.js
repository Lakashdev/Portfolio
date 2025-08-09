import React, { useEffect, useState } from 'react';
import AdminLayout from "./AdminLayout";
import axios from 'axios';

export default function EducationSection() {
  const [education, setEducation] = useState([]);
  const [form, setForm] = useState({
    school: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', description: ''
  });

  const fetchEducation = () => {
    axios.get('http://localhost:5000/api/education')
      .then(res => setEducation(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/education', form)
      .then(() => {
        fetchEducation();
        setForm({ school: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', description: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <AdminLayout>
    <div className="container mt-5" id="education">
      <h2 className="text-success fw-bold mb-4">Education</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-4 border p-3 rounded shadow-sm">
        <div className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="School" value={form.school}
              onChange={(e) => setForm({ ...form, school: e.target.value })} required />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Degree" value={form.degree}
              onChange={(e) => setForm({ ...form, degree: e.target.value })} required />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Field of Study" value={form.fieldOfStudy}
              onChange={(e) => setForm({ ...form, fieldOfStudy: e.target.value })} />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Start Date" value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="End Date" value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
          </div>
          <div className="col-12">
            <textarea className="form-control" placeholder="Description" value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-success w-100">Add Education</button>
          </div>
        </div>
      </form>

      {/* Display */}
      {education.map((edu) => (
        <div key={edu._id} className="bg-dark text-light p-3 rounded mb-3 border border-success">
          <h5 className="text-success">{edu.degree} in {edu.fieldOfStudy}</h5>
          <p className="mb-1"><strong>{edu.school}</strong> ({edu.startDate} - {edu.endDate})</p>
          <p className="mb-0">{edu.description}</p>
        </div>
      ))}
    </div>
    </AdminLayout>
  );
}
