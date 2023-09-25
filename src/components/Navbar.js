import { NavLink } from "react-router-dom";
import React from "react";
import logoSrc from "../pictures/ZwischenspielLogo.svg";
// import miniLogo from "../pictures/miniLogo.svg";

const displayMobileNavigation = {
  "--navbarHeight": "100vh",
  "--showNavbarLinks": "flex",
  "--hideNavbarLogo": "none",
  "--navbarFlexDirection": "column",
  "--navbarFlexAlign": "flex-start",
};
const hideMobileNavigation = {
  "--navbarHeight": "15vh",
  "--showNavbarLinks": "none",
  "--hideNavbarLogo": "flex",
  "--navbarFlexDirection": "row",
  "--navbarFlexAlign": "space-evenly",
};

const Navbar = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  React.useEffect(() => {
    console.log(windowWidth);
  }, [windowWidth]);

  const addDropdownHandling = (container, content) => {
    const button = document.getElementById(container),
      dropdown = document.getElementById(content);

    const addFullSizeDropdown = () => {
      if (container === "galerieDropdownRoot") {
        dropdown.classList.add("showDropdownContentSmallSize");
        dropdown.classList.add("showDropdownContent");
      } else {
        dropdown.classList.add("showDropdownContent");
      }
    };

    const clearFullSizeDropdown = () => {
      if (container === "galerieDropdownRoot") {
        dropdown.classList.remove("showDropdownContentSmallSize");
        dropdown.classList.remove("showDropdownContent");
      } else {
        dropdown.classList.remove("showDropdownContent");
      }
    };

    button.addEventListener("mouseover", addFullSizeDropdown);
    button.addEventListener("mouseout", clearFullSizeDropdown);
    button.addEventListener("onclick", clearFullSizeDropdown);
    global.fullSizeEventlistener = true;
  };

  // if (window.innerWidth <= 540 && container === "showsDropdownRoot") {
  //   dropdown.addEventListener("onclick", () => {
  //     setShowShowsDropdown((prev) => !prev);
  //   });
  // } else if (
  //   window.innerWidth <= 540 &&
  //   container === "galerieDropdownRoot"
  // ) {
  //   dropdown.addEventListener("onclick", () => {
  //     setShowGalerieDropdown((prev) => !prev);
  //   });
  // }

  React.useEffect(() => {
    if (window.innerWidth > 540) {
      addDropdownHandling("showsDropdownRoot", "showsDropdown");
      addDropdownHandling("galerieDropdownRoot", "galerieDropdown");
      console.log(global.fullSizeEventlistener);
    } else {
    }
  }, [windowWidth]);

  const [showMobileNav, setShowMobileNav] = React.useState(false),
    [showShowsDropdown, setShowShowsDropdown] = React.useState(false),
    [showGalerieDropdown, setShowGalerieDropdown] = React.useState(false);

  React.useEffect(() => {
    let currentSettings;
    if (showMobileNav === false) {
      currentSettings = hideMobileNavigation;
    } else {
      currentSettings = displayMobileNavigation;
    }

    for (let pair in currentSettings) {
      document.body.style.setProperty(pair, currentSettings[pair]);
    }
  }, [showMobileNav]);

  return (
    <div id="navigationBar">
      <button
        id="mobileNavbarToggle"
        onClick={() => setShowMobileNav((prev) => !prev)}
      >
        Test
      </button>
      <div id="navbarLinks">
        <NavLink to="/">
          <div id="navbarLogoContainer">
            <img src={logoSrc} alt="zwischenspielLogo" id="navbarLogo"></img>
          </div>
        </NavLink>
        <div className="linkStyle" id="placeholderLink" />
        <NavLink to="/about" className="linkStyle">
          Über uns
        </NavLink>
        <div id="showsDropdownRoot" className="dropdown linkStyle">
          Shows &#9662;
          <div id="showsDropdown" className="dropdownContent">
            <NavLink
              to="/naechste-show"
              className="linkStyle dropdownLink"
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
              className="linkStyle dropdownLink"
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
              className="linkStyle dropdownLink"
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
          Galerie &#9662;
          <div id="galerieDropdown" className="dropdownContent">
            <NavLink
              to="/fotos"
              className="linkStyle dropdownLink"
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
              className="linkStyle dropdownLink"
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
          Vienna Improv (?)
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
