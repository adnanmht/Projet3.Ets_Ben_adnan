import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Titre">
      <h1>BIENVENUE À L’ETS BEN ADNAN</h1>
      <div>
        <h2>Vente en Gros et detail</h2>
        <h3>
          Vous etes commerçant l’Ets Ben-Adnan vous ogffres la possibilités de
          payé en 2 fois 3 fois et 4 fois sans frais
        </h3>

        <h4>DECOUVREZ NOS DIFFERENTS ARTICLES</h4>
      </div>{" "}
      <div>
        {" "}
        <button class="favorite styled" type="button">
          PAGNE & GETZNER
        </button>
      </div>
    </div>
  );
};

export default Home;
