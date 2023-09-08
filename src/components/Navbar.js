import { NavLink } from "react-router-dom";
import React from "react";
import logoSrc from "../pictures/ZwischenspielLogo.svg";
// import miniLogo from "../pictures/miniLogo.svg";

const Navbar = () => {
  const dropdownHandling = (container, content) => {
    const button = document.getElementById(container),
      dropdown = document.getElementById(content);
    button.addEventListener("mouseover", () => {
      dropdown.classList.add("showDropdownContent");
      if (container === "galerieDropdownRoot") {
        dropdown.classList.add("showDropdownContentSmallSize");
      }
    });

    const clearOutDropdown = () => {
      dropdown.classList.remove("showDropdownContent");
      if (container === "galerieDropdownRoot") {
        dropdown.classList.remove("showDropdownContentSmallSize");
      }
    };

    button.addEventListener("mouseout", clearOutDropdown);
    button.addEventListener("onclick", clearOutDropdown);
  };

  React.useEffect(() => {
    dropdownHandling("showsDropdownRoot", "showsDropdown");
  }, []);

  React.useEffect(() => {
    dropdownHandling("galerieDropdownRoot", "galerieDropdown");
  }, []);

  return (
    <div id="navigationBar">
      <div id="navbarLinks">
        <NavLink to="/">
          <div id="navbarLogoContainer">
            <img src={logoSrc} alt="zwischenspielLogo" id="navbarLogo"></img>
          </div>
        </NavLink>
        <NavLink to="/about" className="linkStyle">
          Über uns
        </NavLink>

        <div id="showsDropdownRoot" className="dropdown linkStyle">
          Shows
          <div id="showsDropdown" className="dropdownContent">
            <NavLink
              to="/naechste-show"
              className="linkStyle"
              onClick={() => {
                document
                  .getElementById("showsDropdown")
                  .classList.remove("showDropdownContent");
              }}
            >
              Nächste
            </NavLink>

            <NavLink
              to="/vergangene-shows"
              className="linkStyle"
              onClick={() => {
                document
                  .getElementById("showsDropdown")
                  .classList.remove("showDropdownContent");
              }}
            >
              Vergangene
            </NavLink>
            <NavLink
              to="/calender"
              className="linkStyle"
              onClick={() => {
                document
                  .getElementById("showsDropdown")
                  .classList.remove("showDropdownContent");
              }}
            >
              Kalender
            </NavLink>
          </div>
        </div>

        <div id="galerieDropdownRoot" className="dropdown linkStyle">
          Galerie
          <div id="galerieDropdown" className="dropdownContent">
            <NavLink
              to="/fotos"
              className="linkStyle"
              onClick={() => {
                document
                  .getElementById("galerieDropdown")
                  .classList.remove("showDropdownContent");
                document
                  .getElementById("galerieDropdown")
                  .classList.remove("showDropdownContentSmallSize");
              }}
            >
              Fotos
            </NavLink>

            <NavLink
              to="/jingle"
              className="linkStyle"
              onClick={() => {
                document
                  .getElementById("galerieDropdown")
                  .classList.remove("showDropdownContent");
                document
                  .getElementById("galerieDropdown")
                  .classList.remove("showDropdownContentSmallSize");
              }}
            >
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
