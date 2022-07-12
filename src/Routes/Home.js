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
      <p className="text">
        Vous êtes commerçant,un magasinier, un marchand, un marchand ambulant
        vous n'avez pas le moyen financier nécessaire pour créer votre petit
        business? l'Éts Ben Adnan vous offre la facilité de payer vos commandes
        en 2, 3, 4 fois sans frais,Nous sommes là pour aidé tout le monde a créé
        son business dans des bonnes conditions.
      </p>
      <h4>DECOUVREZ NOS DIFFERENTS ARTICLES</h4>
      <div className="container">
        <ul>
          <Link to="/Pagne_Getzner" className="PAGNE_GETZNER">
            <dd>PAGNE&GETZNER</dd>
            <td>PAGNE</td>
            <div className="images">
              <img src="img/pagne4.png" alt="Pagne4" />
              <img src="img/pagne1.png" alt="Pagne1" />
              <img src="img/pagne2.png" alt="Pagne2" />
            </div>
            <td>GETZNER</td>
            <div className="images">
              <img src="img/getzner.png" alt="getzner" />
              <img src="img/getzner2.png" alt="getzner" />
              <img src="img/getzner.png" alt="getzner" />
            </div>{" "}
          </Link>
          <Link to="/jeans_teeshirt" className="Jeans_teeshirt">
            <dd>JEANS & TEE SHIRT</dd>
            <td>JEANS</td>
            <div className="images">
              <img src="img/jeans.png" alt="Jeans" />
              <img src="img/jeans1.png" alt="Jeans" />
            </div>{" "}
            <td>TEE-SHIRT</td>
            <div className="images">
              <img src="img/teeshirt1.png" alt="teeshirt" />
              <img src="img/teeshirt2.png" alt="teeshirt" />
              <img src="img/teeshirt3.png" alt="teeshirt" />
            </div>
          </Link>
          <Link to="/Nos_chaussure" className="Nos_chaussure">
            <dd>NOS_CHAUSSURE</dd>
            <td>BASKET</td>
            <div className="images">
              {" "}
              <img src="img/basket1.png" alt="basket" />
              <img src="img/basket1.png" alt="basket" />
            </div>
            <td>SANDAL</td>{" "}
            <div className="images">
              <img src="img/sandal.png" alt="sandal" />
              <img src="img/sandal1.png" alt="sandal" />
            </div>{" "}
            <br />
          </Link>{" "}
          <div>
            {" "}
            <hr className="ligne1" />
            <p className="ligne">
              Vous êtes commerçant,un magasinier, un marchand, un marchand
              ambulant vous n'avez pas le moyen financier nécessaire pour créer
              votre petit business? l'Éts Ben Adnan vous offre la facilité de
              payer vos commandes en 2, 3, 4 fois sans frais,Nous sommes là pour
              aidé tout le monde a créé son business dans des bonnes conditions.
            </p>
          </div>{" "}
        </ul>
      </div>
    </nav>
  );
};

export default Home;
