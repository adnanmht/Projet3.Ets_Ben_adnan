import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>
      <ul className="nav-links"></ul>
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
    </nav>
  );
};

export default Navbar;
