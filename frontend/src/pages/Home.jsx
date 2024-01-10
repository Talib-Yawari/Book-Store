// Home.jsx

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container bg-dark">
      <div className="centered-content">
        <div className="msg">
          <h1 className="main-title">Find Yourself in Our Shelves.</h1>
          <p className="slogan">Discover the Joy of Reading.</p>
          <Link
            to="/books"
            className="d-flex justify-content-center view-books-link"
          >
            View Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
