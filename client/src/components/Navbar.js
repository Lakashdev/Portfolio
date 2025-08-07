import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm fixed-top">
      <div className="container-fluid px-4">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-success" to="/">Lakash</Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">

          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/case-studies">Case Studies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="d-flex align-items-center gap-3 text-success fs-5">
            <a href="https://www.linkedin.com/in/lakash-maharjan-b66835172/" target="_blank" rel="noreferrer" className="text-success">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noreferrer" className="text-success">
              <FaFacebook />
            </a>
            <a href="https://github.com/lakash56" target="_blank" rel="noreferrer" className="text-success">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
