import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <NavLink className={"content"} to="/ Mentions légales">
          <p>
            {" "}
            Mentions légales | Pretection des données | CGV | Conditions des
            offres |
          </p>
        </NavLink>
        <NavLink className={"content"} to="/Contact">
          <p>
            {" "}
            Contact: 0695230882 mail: mahamatadnan@gmail.com| Plus d'information
          </p>
        </NavLink>
      </div>
    </div>
  );
}
