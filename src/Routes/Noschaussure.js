import React from "react";
import { Link } from "react-router-dom";
import "./Noschaussure.css"
  
  
  
const Nos_chaussure = () => {
  return (
    <nav className="container">
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
        <Link to="/Nos_chaussure" className="Nos_chaussure">
          <dd>NOS_CHAUSSURE</dd>
          <td>BASKET</td>
          <div className="images">
            {" "}
            <img src="img/basket4.png" alt="basket" />{" "}
            <img src="img/basket3.png" alt="basket" />
            <img src="img/basket1.png" alt="basket" />
            <img src="img/basket2.png" alt="basket" />
            <img src="img/basket4.png" alt="basket" />
            <img src="img/basket1.png" alt="basket" />
            <img src="img/basket1.png" alt="basket" />
            <img src="img/basket2.png" alt="basket" />
            <img src="img/basket3.png" alt="basket" />
            <img src="img/basket1.png" alt="basket" />
          </div>
          <td>SANDAL</td>{" "}
          <div className="images">
            <img src="img/sandal.png" alt="sandal" />
            <img src="img/sandal1.png" alt="sandal" />
            <img src="img/sandal2.png" alt="sandal" />
            <img src="img/sandal3.png" alt="sandal" />
            <img src="img/sandal4.png" alt="sandal" />
            <img src="img/sandal5.png" alt="sandal" />
            <img src="img/sandal.png" alt="sandal" />
            <img src="img/sandal5.png" alt="sandal" />
            <img src="img/sandal1.png" alt="sandal" />
            <img src="img/sandal3.png" alt="sandal" />
            <img src="img/sandal4.png" alt="sandal" />
            <img src="img/sandal2.png" alt="sandal" />
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
      </div>
    </nav>
  );
};

export default Nos_chaussure;
