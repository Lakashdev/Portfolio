import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Element } from 'react-scroll';
import './TechStack.css'; 

export default function TechStack() {
  const [techSkills, setTechSkills] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:5000/api/techstack')
    .then(res => {
      console.log("Fetched skills:", res.data);
      setTechSkills(res.data);
    })
    .catch(err => console.error("Failed to fetch:", err));
}, []);

  return (
    <Element name="techstack">
    <div className="container-fluid text-center py-5" style={{ backgroundColor: '#000', color: '#fff',minHeight: '100vh',display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 className="mb-4 fw-bold" style={{ color: '#00ff88' }}>Tech Stack</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="row justify-content-center">
            {techSkills.map((tech, index) => (
              <div className="col-4 col-sm-3 col-md-3 mb-4 text-center" key={index}>
                <i className={`${tech.iconClass} fa-2x tech-icon`} />
                <p className="mt-2">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
}
