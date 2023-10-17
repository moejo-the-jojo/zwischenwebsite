import { NavLink } from "react-router-dom";
import React from "react";
import logoSrc from "../pictures/ZwischenspielLogo.svg";
import * as RRD from "react-router-dom";

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

const eventListenersParentsArray = [
  {
    container: "showsDropdownRoot",
    content: "showsDropdown",
  },
  {
    container: "galerieDropdownRoot",
    content: "galerieDropdown",
  },
];

const Navbar = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth),
    [showMobileNav, setShowMobileNav] = React.useState(false);

  const desktopListeners = React.useRef(false),
    mobileListeners = React.useRef(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  React.useEffect(() => {
    console.log("im the width: " + windowWidth);
  }, [windowWidth]);

  const addDropdownClasses = (container, content) => {
    const dropdown = document.getElementById(content);
    if (container === "galerieDropdownRoot") {
      dropdown.classList.add("showDropdownContentSmallSize");
      dropdown.classList.add("showDropdownContent");
    } else {
      dropdown.classList.add("showDropdownContent");
    }
  };

  const removeDropdownClasses = (container, content) => {
    const dropdown = document.getElementById(content);
    if (container === "galerieDropdownRoot") {
      dropdown.classList.remove("showDropdownContentSmallSize");
      dropdown.classList.remove("showDropdownContent");
    } else {
      dropdown.classList.remove("showDropdownContent");
    }
  };

  React.useEffect(() => {
    eventListenersParentsArray.forEach((element) => {
      global[element.container] = () => {
        addDropdownClasses(element.container, element.content);
      };
      global[`${element.container}remover`] = () => {
        removeDropdownClasses(element.container, element.content);
      };
      global[`${element.container}MobileStatus`] = false;
      global[`${element.container}MobileToggle`] = () => {
        console.log("yes im attached <3");
        if (global[`${element.container}MobileStatus`] === false) {
          addDropdownClasses(element.container, element.content);
          global[`${element.container}MobileStatus`] = true;
          console.log("i run");
        } else {
          removeDropdownClasses(element.container, element.content);
          global[`${element.container}MobileStatus`] = false;
        }
      };
    });
  }, []);

  const addDesktopEventListeners = () => {
    eventListenersParentsArray.forEach((element) => {
      const button = document.getElementById(element.container);
      button.addEventListener("mouseover", global[element.container]);
      button.addEventListener(
        "mouseout",
        global[`${element.container}remover`]
      );
      button.addEventListener("onclick", global[`${element.container}remover`]);
      desktopListeners.current = true;
    });
  };

  const removeDesktopEventListeners = () => {
    eventListenersParentsArray.forEach((element) => {
      const button = document.getElementById(element.container);
      button.removeEventListener("mouseover", global[element.container]);
      button.removeEventListener(
        "mouseout",
        global[`${element.container}remover`]
      );
      button.removeEventListener(
        "onclick",
        global[`${element.container}remover`]
      );
    });
    desktopListeners.current = false;
  };

  const addMobileEventListeners = () => {
    eventListenersParentsArray.forEach((element) => {
      const button = document.getElementById(element.container);
      button.addEventListener(
        "mousedown",
        global[`${element.container}MobileToggle`]
      );
    });
    mobileListeners.current = true;
    // mousedown? onclick?
    //button.addEventListener("mousedown", global[`${container}MobileToggle`]);
  };

  const removeMobileEventListeners = () => {
    eventListenersParentsArray.forEach((element) => {
      const button = document.getElementById(element.container);
      button.removeEventListener(
        "mousedown",
        global[`${element.container}MobileToggle`]
      );
    });
    mobileListeners.current = false;
  };

  React.useEffect(() => {
    if (windowWidth > 540) {
      console.log("i run at the start for");
      addDesktopEventListeners();
      desktopListeners.current = true;
      document.body.style.setProperty("--desktopDropdownMargin", "1vh");
      return () => {
        removeDesktopEventListeners();
      };
    } else {
      addMobileEventListeners();
      mobileListeners.current = true;
      return () => {
        removeMobileEventListeners();
      };
    }
  }, []);

  React.useEffect(() => {
    if (windowWidth > 540 && desktopListeners.current !== true) {
      setShowMobileNav(false);
      removeMobileEventListeners();
      addDesktopEventListeners();
      document.body.style.setProperty("--desktopDropdownMargin", "1vh"); // double this??
    } else if (windowWidth <= 540 && mobileListeners.current !== true) {
      removeDesktopEventListeners();
      addMobileEventListeners();
    }
  }, [windowWidth]);

  const location = RRD.useLocation();
  React.useEffect(() => {
    setShowMobileNav(false);
  }, [location]);

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
