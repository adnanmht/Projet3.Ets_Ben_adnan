import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ContactPage.module.css";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import React from "react";
import "./ContactPage.module.css";

const Contact = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9ckxiwr",
      "template_73bygp6",
      form.current,
      "-P9_tX4W1pcnOXEX_"
    );

    setNom("");
    setEmail("");
    setMessage("");
    toast("Merci ! Nous reviendrons vite vers vous :)", {
      theme: "light",
      type: "success",
      position: "bottom-center",
    });
  };

  return (
    <div className={styles.background}>
      <div className={styles.apropos}>
        <p>A propos de Ets-Ben_adnan </p>
      </div>
      <div className={styles.detail}>
        <p style={{ padding: "10px" }}>
          Vous êtes commerçant,un magasinier, un marchand, un marchand ambulant
          vous n'avez pas le moyen financier nécessaire pour créer votre petit
          business? l'Éts Ben Adnan vous offre la facilité de payer vos
          commandes en 2, 3, 4 fois sans frais,Nous sommes là pour aidé tout le
          monde a créé son business dans des bonnes conditions.
        </p>
      </div>
      <div className={styles.lignedesktop}>
        <hr className="ligne" />
      </div>
      <div className={styles.contacte}>
        <p>Contacte-nous</p>
      </div>
      <div className={styles.container}>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <label htmlFor="email">
            Nom
            <input
              type="nom"
              id="nom"
              name="nom"
              className={styles.field}
              required
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="ex: Adnan Mahamat"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              className={styles.field}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ex: adnanmht@gmail.com"
            />
          </label>
          <div htmlFor="message">
            Message
            <textarea
              rows="8"
              cols="90"
              id="message"
              name="message"
              className={styles.field}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre texte ici..."
            />
          </div>

          <Button
            type="submit"
            variant="outlined"
            sx={{
              marginTop: "10px",
              borderColor: "#FFCE31",
              backgroundColor: "#FFCE31",
              color: "black",
              fontWeight: "bold",

              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "black",
                borderColor: "black",
                transition: "0.7s",
                color: "#c4c4c4",
              },
            }}
          >
            Envoyer
          </Button>
        </form>

        <ToastContainer />
      </div>

      <div className={styles.lignemobile}>
        <hr className="ligne" />
      </div>
    </div>
  );
};
export default Contact;
