import { Route, Routes } from "react-router-dom";
import Home from "../Routes/Home";
import PagneGetzner from "../Routes/PagneGetzner";
import Noschaussure from "../Routes/Noschaussure";
import Jeansteeshirt from "../Routes/Jeansteeshirt";
import Quisommenous from "../Routes/Quisommenous";
import Contact from "../Routes/Contact";
import Signup from "../Routes/Signup";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagnGetzner" element={<PagneGetzner />} />
        <Route path="/nos_chaussure" element={<Noschaussure />} />
        <Route path="/jeanteeshirt" element={<Jeansteeshirt />} />
        <Route path="/quisommenous" element={<Quisommenous />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </main>
  );
}
