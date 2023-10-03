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

const eventListenerRemovalArr = [
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
    [desktopEventListener, setDesktopEventListener] = React.useState(false);

  const desktopListeners = React.useRef();

  React.useEffect(() => {
    desktopListeners.current = desktopEventListener;
    console.log(
      "i am the current and i am now active: " + desktopListeners.current
    );
  }, [desktopEventListener]);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  React.useEffect(() => {
    console.log(windowWidth);
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
    eventListenerRemovalArr.forEach((element) => {
      global[element.container] = () => {
        addDropdownClasses(element.container, element.content);
      };
      global[`${element.container}remover`] = () => {
        removeDropdownClasses(element.container, element.content);
      };
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
    global.desktopEventListener = false;
    global.mobileEventListeners = false;
  }, []);

  const changeToDesktopEventListeners = (container) => {
    // remove Mobile Event Listeners here
    global.mobileEventListeners = false;
    const button = document.getElementById(container);
    console.log("i run (im the changeToD btw)");
    button.addEventListener("mouseover", global[container]);
    button.addEventListener("mouseout", global[`${container}remover`]);
    button.addEventListener("onclick", global[`${container}remover`]);
    setDesktopEventListener(true);
  };

  const changeToMobileEventListeners = (container) => {
    console.log("i am the changed event");
    const button = document.getElementById(container);
    button.removeEventListener("mouseover", global[container]);
    button.removeEventListener("mouseover", global[container]);
    button.removeEventListener("mouseout", global[`${container}remover`]);
    button.removeEventListener("onclick", global[`${container}remover`]);
    console.log(button);

    //button.addEventListener("mousedown", global[`${container}MobileToggle`]);

    // add mobile listeners here
    // mousedown? onclick?
  };

  const location = RRD.useLocation();
  React.useEffect(() => {
    setShowMobileNav(false);
  }, [location]);

  React.useEffect(() => {
    eventListenerRemovalArr.forEach((element) => {
      global[`${element.container}MobileStatus`] = false;
    });
  }, []);

  React.useEffect(() => {
    if (window.innerWidth > 540 && desktopListeners.current !== true) {
      console.log("starter is running");
      console.log(desktopListeners.current);
      setShowMobileNav(false);
      // remove mobile listeners here
      eventListenerRemovalArr.forEach((element) => {
        changeToDesktopEventListeners(element.container, element.content);
      });
      document.body.style.setProperty("--desktopDropdownMargin", "1vh");
      global.desktopEventListener = true;
      global.mobileEventListeners = false;
    } else if (
      window.innerWidth <= 540 &&
      global.mobileEventListeners === false
    ) {
      // remove desktop listeners here
      eventListenerRemovalArr.forEach((element) => {
        console.log("i am here to change events.");
        changeToMobileEventListeners(element.container, element.content);
      });
      global.desktopEventListener = false;
      global.mobileEventListeners = true;
    }
  }, [windowWidth]);

  const [showMobileNav, setShowMobileNav] = React.useState(false);

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
