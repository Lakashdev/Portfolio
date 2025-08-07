import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg"; // Make sure this image exists

function Hero() {
  return (
    <div className="d-flex align-items-center justify-content-center bg-black text-white" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left: Text */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold">Hi, I'm Lakash Maharjan</h1>
            <p className="lead text-light mt-3">
              AI Enthusiast passionate about building smart solutions for real-world problems. I work at the intersection of data, code, and impact, crafting tools for urban systems, web platforms, and AI-driven applications.
            </p>
            <Link to="/projects" className="btn btn-success mt-4 px-4 py-2">
              View Projects
            </Link>
          </div>

          {/* Right: Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={profile}
              alt="Lakash Maharjan"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "250px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
