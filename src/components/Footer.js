import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <NavLink className={"content"} to="/ Mentions légales">
        Mentions légales | Pretection des données | CGV | Conditions des
          offres |
        </NavLink>
        <NavLink className={"content"} to="/Contact">
          Contact: 0695230882 
          mail: mahamatadnan@gmail.com
          Plus d’inspiration 
        </NavLink>
      </div>
      <div className="logo-content">
        <div className="webName">
          Plus d’inspiration 
        </div>
      
      </div>
    </div>
  );
}
