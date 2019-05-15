import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-darg bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MERN Google Books Search
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <span className="divider">|</span>
          <li className="nav-item">
            <Link
              to="/books"
              className={
                window.location.pathname === "/books"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              My Bookshelf
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
