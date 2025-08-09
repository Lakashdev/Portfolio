import React, { useEffect, useState } from 'react';

import axios from 'axios';

export default function About() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/education')
      .then(res => setEducation(res.data))
      .catch(err => console.error('Failed to load education:', err));
  }, []);

  return (
    <div className="container-fluid py-5" id="about" style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh',display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="row justify-content-center">
        {/* Left Side - Education */}
        <div className="col-md-4 mb-4">
          <h3 className="text-success mb-4">My Education</h3>
          {education.map((edu) => (
            <div key={edu._id} className="mb-3 p-3 bg-dark text-light rounded border-start border-success border-3">
              <h5 className="text-success">{edu.degree}</h5>
              <p className="mb-1">{edu.school}</p>
              <small>{edu.startDate} – {edu.endDate}</small>
              {edu.fieldOfStudy && <p className="mb-0"><strong>Field:</strong> {edu.fieldOfStudy}</p>}
              {edu.description && <p className="mb-0">{edu.description}</p>}
            </div>
          ))}
        </div>

        {/* Right Side - About Me */}
        <div className="col-md-6">
          <h3 className="text-success mb-4">About Me</h3>
          <p className="text-light">
            I'm a passionate full-stack developer with a strong background in AI, data analysis, and sustainable technologies.
            I love building impactful tools that blend modern technologies like React, Node.js, and machine learning.
          </p>
          <p className="text-light">
            My work reflects a strong focus on user experience, clean architecture, and solving real-world problems with code.
            Outside coding, I enjoy music, mountains, and meaningful conversations.
          </p>
        </div>
      </div>
    </div>
  );
}
