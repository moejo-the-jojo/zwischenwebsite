import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navigationBar">
      <img id="navbarLogo" alt="logo" />

      <div id="navbarLinks">
        <NavLink to="/about" className="linkStyle">
          Über uns
        </NavLink>

        <div id="showsDropdown" className="dropdown linkStyle">
          Shows
          <div className="dropdownContent linkStyle">
            <NavLink to="/naechste-show" className="linkStyle">
              Nächste
            </NavLink>

            <NavLink to="/vergangene-shows" className="linkStyle">
              Vergangene
            </NavLink>
          </div>
        </div>

        <div id="galerieDropdown" className="dropdown linkStyle">
          Galerie
          <div className="dropdownContent linkStyle">
            <NavLink to="/fotos" className="linkStyle">
              Fotos
            </NavLink>

            <NavLink to="/jingle" className="linkStyle">
              Jingle
            </NavLink>
          </div>
        </div>

        <NavLink to="/kontakt" className="linkStyle">
          Kontakt
        </NavLink>

        <NavLink to="vienna-improv" className="linkStyle">
          Vienna Improv
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
