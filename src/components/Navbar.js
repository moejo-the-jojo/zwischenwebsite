import { NavLink } from "react-router-dom";
import React from "react";

// import logo from "../pictures/ZwischenspielLogo.png";

const Navbar = ({ logo, appIsLoading }) => {
  const [isLoading, setIsLoading] = React.useState(true);

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
    if (isLoading === false) {
      dropdownHandling("showsDropdownRoot", "showsDropdown");
    }
  }, [isLoading]);

  React.useEffect(() => {
    if (isLoading === false) {
      dropdownHandling("galerieDropdownRoot", "galerieDropdown");
    }
  }, [isLoading]);

  React.useEffect(() => {
    if (isLoading === false) {
      document.getElementById("navbarLogoContainer").appendChild(logo);
      console.log("i run??");
    }
  }, [isLoading, logo]);

  React.useEffect(() => {
    console.log(logo.complete);
  });

  React.useEffect(() => {
    console.log(logo.complete);
    if (logo.complete === true) {
      setIsLoading(false);
    }
  }, [logo]);

  const theRealLoading = React.useRef(isLoading);

  React.useEffect(() => {
    theRealLoading.current = isLoading;
  }, [isLoading]);

  React.useEffect(() => {
    console.log(
      "i show, whenever isLoading is changing " + theRealLoading.current
    );
  });

  return (
    appIsLoading.current === false && (
      <div id="navigationBar">
        <div id="navbarLinks">
          <NavLink to="/">
            <div id="navbarLogoContainer">
              {isLoading.toString()}
              {appIsLoading.current.toString()}
              {/* <img eager="true" src={logo} id="navbarLogo" alt="logo" /> */}
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
    )
  );
};

export default Navbar;
