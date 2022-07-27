import { Route, Routes } from "react-router-dom";
import Home from "../Routes/Home";
import Pagne from "../Routes/Pagne";
import Jeansteeshirt from "../Routes/Jeansteeshirt"
import Noschaussure from "../Routes/Noschaussure";
import Rendezvous from "../Routes/Rendez-vous";
import About from "../Routes/About";
import Contact from "../Routes/Contact";
import Signup from "../Routes/Signup";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
          {/*path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus*/}
          <Route path="*" element={<Home />} />{" "}
        <Route path="/pagne" element={<Pagne />} />
        <Route path="/nos_chaussure" element={<Noschaussure />} />
        <Route path="/Jeansteeshirt" element={<Jeansteeshirt />} />
        <Route path="/rendezvous" element={<Rendezvous />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </main>
  );
}
