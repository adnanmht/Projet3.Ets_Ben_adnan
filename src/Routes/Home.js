import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <nav className="Titre">
      <div className="accueil">
        <img src="img/logo-ets_benadnan.png" alt=""></img>
      </div>
      <h1>BIENVENUE À L’ETS BEN ADNAN</h1>
      <h2>Vente en Gros et detail</h2>
      <h3>
        Vous êtes commerçant,un magasinier, un marchand, un marchand ambulant
        vous n'avez pas le moyen financier nécessaire pour créer votre petit
        business? l'Éts Ben Adnan vous offre la facilité de payer vos commandes
        en 2, 3, 4 fois sans frais,Nous sommes là pour aidé tout le monde a créé
        son business dans des bonnes conditions.
      </h3>
      <h4>DECOUVREZ NOS DIFFERENTS ARTICLES</h4>
      <ul>
        <Link to="/Pagne_Getzner" className="PAGNE_GETZNER">
          <dd>Pgne&Getzner</dd>
          <dd>PAGNE</dd>
          <img src="img/pagne.png" alt="logo"></img>
          <img src="img/pagne1.png" alt="logo"></img>
          <img src="img/pagne2.png" alt="Pagne"></img>
          <img src="img/pagne3.png" alt="Pagne"></img>
          <img src="img/pagne4.png" alt="Pagne"></img>
        </Link>
        <Link to="/Nos_chaussure" className="Nos_chaussure">
          <dd>Nos_Chaussure</dd>
        </Link>
        <Link to="/eans_teeshirt" className="Jeans_teeshirt">
          <li>Teeshirt&Jeans</li>
        </Link>
        <Link to="/Qui_somme_nous" className="Qui_somme_nous">
          <dd>Qui_somme_nous</dd>
        </Link>
        <Link to="/Contact" className="Contact">
          <dd>Contact</dd>
        </Link>
        <Link to="/Signup" className="Signup">
          <dd>Sign Up</dd>
        </Link>
      </ul>
    </nav>
  );
};

export default Home;
