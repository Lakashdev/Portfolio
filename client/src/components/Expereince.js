import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Experience.css"; // <-- create this file (below)

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const timelineRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/experience")
      .then((res) => setExperiences(res.data))
      .catch((err) => console.error("Error fetching experience:", err))
      .finally(() => setLoading(false));
  }, []);

  // simple reveal-on-scroll (IntersectionObserver)
  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const items = el.querySelectorAll(".tl-item");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("tl-in");
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [experiences]);

  return (
    <section
      className="container-fluid py-5"
      id="experience"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <h2 className="text-success fw-bold mb-4 d-flex align-items-center gap-2">
          <i className="fas fa-briefcase"></i> Work Experience
        </h2>

        {/* Loading state */}
        {loading && (
          <div className="text-muted">Loading experiences…</div>
        )}

        {/* Empty state */}
        {!loading && experiences.length === 0 && (
          <div className="alert alert-dark border-success text-light">
            No experiences yet. Add some from your Admin panel.
          </div>
        )}

        {/* Timeline */}
        {!loading && experiences.length > 0 && (
          <div className="timeline" ref={timelineRef}>
            {experiences.map((exp, idx) => {
              const collapseId = `exp-${exp._id}`;
              return (
                <div className="tl-item" key={exp._id || idx}>
                  <div className="tl-dot"></div>
                  <div className="tl-card bg-dark border border-success rounded-3 shadow-sm">
                    <div className="d-flex justify-content-between flex-wrap gap-2">
                      <div>
                        <h5 className="mb-1 text-success">{exp.role}</h5>
                        <div className="text-light-50 small">
                          <i className="fas fa-building me-1"></i>
                          {exp.company}
                        </div>
                      </div>
                      <span className="badge bg-success align-self-start">
                        {exp.startDate} – {exp.endDate || "Present"}
                      </span>
                    </div>

                    {/* Tech badges */}
                    {exp.technologies?.length > 0 && (
                      <div className="mt-3">
                        {exp.technologies.map((t, i) => (
                          <span key={i} className="badge rounded-pill tech-badge me-2 mb-2">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Collapsible description */}
                    {exp.description && (
                      <>
                        <button
                          className="btn btn-outline-success btn-sm mt-3"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded="false"
                          aria-controls={collapseId}
                        >
                          Details
                        </button>
                        <div className="collapse mt-3" id={collapseId}>
                          <p className="mb-0 text-light">{exp.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
