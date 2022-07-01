import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <nav className="Titre">
      {" "}
      <br />
      <h1>BIENVENUE</h1>
      <br />
      <div className="accueil">
        <img src="img/ets_benadnan.png" alt=""></img>
      </div>
      <h2>Vente en Gros et detail</h2>
      <h3>
        <p>
        Vous êtes commerçant,un magasinier, un marchand, un marchand ambulant
        vous n'avez pas le moyen financier nécessaire pour créer votre petit
        business? l'Éts Ben Adnan vous offre la facilité de payer vos commandes
        en 2, 3, 4 fois sans frais,Nous sommes là pour aidé tout le monde a créé
        son business dans des bonnes conditions.
     </p> </h3>
      <h4>DECOUVREZ NOS DIFFERENTS ARTICLES</h4>
      <ul>
        <Link to="/Pagne_Getzner" className="PAGNE_GETZNER">
          <dd>PAGNE_GETZNER</dd>

          <td>PAGNE</td>
          <img src="img/pagne4.png" alt="Pagne" />
          <img src="img/pagne1.png" alt="logo" />
          <td>GETZNER</td>
          <img src="img/getzner.png" alt="getzner" />
          <img src="img/getzner2.png" alt="getzner" />
        </Link>
        <Link to="/jeans_teeshirt" className="Jeans_teeshirt">
          <dd>JEANS & TEE SHIRT</dd>
          <td>JEANS</td>
          <img src="img/jeans.png" alt="Jeans" />
          <img src="img/jeans1.png" alt="Jeans" />
          <td>TEE-SHIRT</td>
          <img src="img/teeshirt.png" alt="teeshirt" />
          <img src="img/teeshirt1.png" alt="teeshirt" />
          <img src="img/teeshirt2.png" alt="teeshirt" />
          <img src="img/teeshirt3.png" alt="teeshirt" />
        </Link>
        <Link to="/Nos_chaussure" className="Nos_chaussure">
          <dd>NOS_CHAUSSURE</dd>
          <td>BASKET</td>
          <img src="img/basket.png" alt="baskt" />
          <img src="img/basket1.png" alt="basket" />
          <td>SANDAL</td>
          <img src="img/sandal.png" alt="sandal" />
          <img src="img/sandal1.png" alt="sandal" />
        </Link>
        <Link to="/Qui_somme_nous" className="Qui_somme_nous">
          <dd>QUI_SOMME_NOUS</dd>
        </Link>
        <Link to="/Contact" className="Contact">
          <dd>Contact</dd>
        </Link>
        <Link to="/Signup" className="Signup">
          <dd>SIGN UP</dd>
        </Link>
      </ul>
    </nav>
  );
};

export default Home;
