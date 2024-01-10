//Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ borderBottom: "1px solid white" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Book Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link className=" nav-link active text-white nav-item" to="/">
              HOME
            </Link>

            <Link className="nav-link nav-item text-white" to="/books">
              BOOKS
            </Link>

            <Link className="nav-link nav-item text-white" to="/addBooks">
              ADD BOOKS
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
