import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="img/ets_benadnan.png" alt=""></img>
      </div>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="Home">
          <li>Home</li>
        </Link>
        <Link to="/Pagne" className="Nos_Tissus">
          <li>Nos-Tissus</li>
        </Link>
        <Link to="/Nos_chaussure" className="Nos_chaussure">
          <li>Nos-Chaussure</li>
        </Link>
        <Link to="/rendezvous" className="Rendezvous">
          <li>Prendre rdv</li>
        </Link>
        <Link to="/Jeansteeshirt" className="Jeansteeshirt">
          <li>Jeans & Teeshirt</li>
        </Link>
        <Link to="/About" className="About">
          <li>About</li>
        </Link>
        <Link to="/Contact" className="Contact">
          <li>Contact</li>
        </Link>
        <Link to="/Signup" className="Signup">
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
