import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">
        <img src="img/logo.png" alt="logo"></img>{" "}
      </h3>

      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="Home">
          <li>Home</li>
        </Link>
        <Link to="/" className="Pagne_Getzner">
          <li>Pgne&Getzner</li>
        </Link>
        <Link to="/" className="Nos_chaussure">
          <li>Nos_Chaussure</li>
        </Link>
        <Link to="/" className="Jeans_teeshirt">
          <li>Teeshirt&Jeans</li>
        </Link>
        <Link to="/" className="Qui_somme_nous">
          <li>Qui_somme_nous</li>
        </Link>
        <Link to="/" className="Contact">
          <li>Contact</li>
        </Link>
        <Link to="/" className="Signup">
          <li>Sign Up</li>
        </Link>
      </ul>

      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-itemes"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
