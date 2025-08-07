import React from "react";
import { Link } from "react-router-dom";
import "./AdminLayout.css"; // We'll style sidebar here

function AdminLayout({ children }) {
  return (
    <div className="d-flex" id="wrapper">
      
      {/* Sidebar */}
      <div className="bg-dark border-end text-white" id="sidebar-wrapper" style={{ minHeight: "100vh", width: "250px" }}>
        <div className="sidebar-heading fs-4 fw-bold py-3 px-3 border-bottom">
          My Portfolio Admin
        </div>
        <div className="list-group list-group-flush">
          <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-dark text-white">
            Dashboard
          </Link>
          <Link to="/admin/dashboard/projects" className="list-group-item list-group-item-action bg-dark text-white">
            Projects
          </Link>
          <Link to="/admin/dashboard/add" className="list-group-item list-group-item-action bg-dark text-white">
            Add Project
          </Link>
          <button 
            className="list-group-item list-group-item-action bg-dark text-white"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/admin/login";
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div id="page-content-wrapper" className="w-100">
        {/* Top Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-3">
          <span className="navbar-brand">Admin Panel</span>
        </nav>

        {/* Main Page Content */}
        <div className="container-fluid p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
