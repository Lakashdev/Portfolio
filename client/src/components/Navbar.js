import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

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
              <ScrollLink
                to="home"               // must match <Element name="hero">
                smooth={true}
                duration={500}
                offset={-80}            // adjust if you have a fixed navbar
                className="nav-link text-light"
                style={{ cursor: "pointer" }}
              >
                Home
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                to="experience"         // must match <Element name="experience">
                smooth={true}
                duration={500}
                offset={-80}            // optional: adjust for fixed navbar height
                className="nav-link text-light"
                style={{ cursor: "pointer" }}
              >
                Experience
              </ScrollLink>
            </li>

            <li className="nav-item">
              {isHome ? (
                <ScrollLink
                  to="techstack"
                  smooth={true}
                  duration={500}
                  className="nav-link text-light"
                  style={{ cursor: "pointer" }}
                >
                  Tech Stack
                </ScrollLink>
              ) : (
                <Link className="nav-link text-light" to="/#techstack">Tech Stack</Link>
              )}
            </li>
            
            <li className="nav-item">
              <ScrollLink
                to="projects"         // must match <Element name="projects">
                smooth={true}
                duration={500}
                offset={-80}          // optional: adjust for fixed navbar height
                className="nav-link text-light"
                style={{ cursor: "pointer" }}
              >
                Projects
              </ScrollLink>
            </li>

            <li className="nav-item">
               <ScrollLink
                to="about"         // must match <Element name="projects">
                smooth={true}
                duration={500}
                offset={-80}          // optional: adjust for fixed navbar height
                className="nav-link text-light"
                style={{ cursor: "pointer" }}
              >
                About Me
              </ScrollLink>
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
