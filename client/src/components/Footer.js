import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <p>
          <a href="https://linkedin.com" className="text-white me-2">LinkedIn</a>
          <a href="https://github.com" className="text-white">GitHub</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
