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

  const addDesktopDropdown = (container, content) => {
    return addDropdownClasses(container, content);
  };

  const removeDesktopDropdown = (container, content) => {
    return removeDropdownClasses(container, content);
  };

  const addDesktopDropdownListeners = (container, content) => {
    global[container] = () => addDesktopDropdown(container, content);
    console.log(global[container]);
    global[`${container}remover`] = () =>
      removeDesktopDropdown(container, content);
    const button = document.getElementById(container);
    button.addEventListener("mouseover", global[container]);
    button.addEventListener("mouseout", global[`${container}remover`]);
    button.addEventListener("onclick", global[`${container}remover`]);
    global.desktopEventListener = true;
  };

  // const addMobileDropdownListeners = (container, content) => {
  //   const button = document.getElementById(container),
  //     lists = document.getElementsByClassName("linkStyle");

  //   const addMobileDropdown = () => {
  //     addDropdownClasses(container, content);
  //   };
  //   const removeMobileDropdown = () => {
  //     removeDropdownClasses(container, content);
  //   };

  //   button.addEventListener("onclick", addMobileDropdown);
  //   lists.map((a) => {
  //     a.addEventListener("onclick", removeMobileDropdown);
  //   });
  //   global.mobileEventListener = true;
  // };

  React.useEffect(() => {
    if (window.innerWidth > 540 && global.desktopEventListener !== true) {
      addDesktopDropdownListeners("showsDropdownRoot", "showsDropdown");
      addDesktopDropdownListeners("galerieDropdownRoot", "galerieDropdown");
      document.body.style.setProperty("--desktopDropdownMargin", "1vh");
      console.log(global.desktopEventListener);
    } else if (window.innerWidth <= 540) {
      const eventListenerRemovalArr = [
        {
          html: document.getElementById("showsDropdownRoot"),
          name: "showsDropdownRoot",
        },
        {
          html: document.getElementById("galerieDropdownRoot"),
          name: "galerieDropdownRoot",
        },
      ];
      eventListenerRemovalArr.forEach((element) => {
        element.html.removeEventListener("mouseover", global[element.name]);
        element.html.removeEventListener(
          "mouseout",
          global[`${element.name}remover`]
        );
        element.html.removeEventListener(
          "onclick",
          global[`${element.name}remover`]
        );
      });
      global.desktopEventListener = false;
    }
  }, [windowWidth]);

  // const addMobileDropdown = (container, content) => {
  //   const button = document.getElementById(container),
  //     dropdown = document.getElementById(content);

  //   const mobileDropdown = () => {
  //     if (container === "galerieDropdownRoot") {
  //       dropdown.classList.add("showDropdownContentSmallSize");
  //       dropdown.classList.add("showDropdownContent");
  //     } else {
  //       dropdown.classList.add("showDropdownContent");
  //     }
  //   };

  //   const clearmobileDropdown = () => {
  //     if (container === "galerieDropdownRoot") {
  //       dropdown.classList.remove("showDropdownContentSmallSize");
  //       dropdown.classList.remove("showDropdownContent");
  //     } else {
  //       dropdown.classList.remove("showDropdownContent");
  //     }
  //   };
  // };

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
