import { NavLink } from "react-router-dom";
import logo from "./logo192.png";
import React from "react";

const Navbar = () => {
  const dropdownHandling = (container, content) => {
    const button = document.getElementById(container),
      dropdown = document.getElementById(content);
    button.addEventListener("mouseover", () => {
      dropdown.classList.add("showDropdownContent");
    });

    button.addEventListener("mouseout", () => {
      dropdown.classList.remove("showDropdownContent");
    });
  };

  React.useEffect(() => {
    dropdownHandling("showsDropdownRoot", "showsDropdown");
    /*
    const button = document.getElementById("showsDropdownRoot"),
      dropdown = document.getElementById("showsDropdown");
    button.addEventListener("mouseover", () => {
      dropdown.classList.add("showDropdownContent");
    });

    button.addEventListener("mouseout", () => {
      dropdown.classList.remove("showDropdownContent");
    }); 
    */
  }, []);

  React.useEffect(() => {
    dropdownHandling("galerieDropdownRoot", "galerieDropdown");
  }, []);

  return (
    <div id="navigationBar">
      <div id="navbarLinks">
        <NavLink to="/">
          <div id="navbarLogoContainer">
            <img src={logo} id="navbarLogo" alt="logo" />
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
