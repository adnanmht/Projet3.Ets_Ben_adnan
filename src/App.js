import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Pagne_Getzner from "./components/Pagne_Getzner";
import Nos_chaussure from "./components/Nos_chaussure";
import Jeans_tee_shirt from "./components/Jeans_tee_shirt";
import Qui_somme_nous from "./components/Qui_somme_nous";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" components={Home} exact>
          <Home />
        </Route>
        <Route path="/Pagne_Getzner" components={Pagne_Getzner} exact>
          <pagne_Getzner />
        </Route>
        <Route path="/Nos_chaussure" components={Nos_chaussure} exact>
          <jos_chaussure />
        </Route>
        <Route path="/Jeans_tee_shirt" components={Jeans_tee_shirt} exact>
          <jeans_tee_shirt />
        </Route>
        <Route path="/Qui_somme_nous" components={Qui_somme_nous} exact>
          <qui_somme_nous />
        </Route>
        <Route path="/sontact" components={Contact} exact>
          <Contact />
        </Route>
        <Route path="/signup" components={Signup} exact>
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
