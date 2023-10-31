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
  "--navbarFlexAlign": "center",
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
  const handleDesktopScroll = () => {
    const navBar = document.getElementById("navigationBar"),
      navLogo = document.getElementById("navbarLogo"),
      routesContainer = document.getElementById("realRoutesContainer");
    if (window.scrollY > 0) {
      navBar.style.height = "10vh";
      navLogo.style.marginTop = "10vh";
      navLogo.style.height = "16.5vh";
      routesContainer.style.minHeight = "90vh";
    } else if (window.scrollY === 0) {
      setTimeout(() => {
        navBar.style.height = "20vh";
        navLogo.style.marginTop = "0";
        navLogo.style.height = "20vh";
        routesContainer.style.minHeight = "80vh";
      }, 10);
    }
    global.handleDesktopScroll = true;
  };

  const handleMobileScroll = () => {
    const navBar = document.getElementById("navigationBar"),
      navLogo = document.getElementById("navbarLogo"),
      routesContainer = document.getElementById("realRoutesContainer");
    if (window.scrollY > 0) {
      console.log("heyho");
    }
  };

  // React.useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const navBar = document.getElementById("navigationBar"),
  //       navLogo = document.getElementById("navbarLogo"),
  //       routesContainer = document.getElementById("realRoutesContainer");
  //     if (window.scrollY > 0) {
  //       navBar.style.height = "10vh";
  //       navLogo.style.marginTop = "10vh";
  //       navLogo.style.height = "16.5vh";
  //       routesContainer.style.minHeight = "90vh";
  //     } else if (window.scrollY === 0) {
  //       setTimeout(() => {
  //         navBar.style.height = "20vh";
  //         navLogo.style.marginTop = "0";
  //         navLogo.style.height = "20vh";
  //         routesContainer.style.minHeight = "80vh";
  //       }, 10);
  //     }
  //   });
  // }, []);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth),
    [showMobileNav, setShowMobileNav] = React.useState(false);

  const desktopListeners = React.useRef(false),
    mobileListeners = React.useRef(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  // just test
  // React.useEffect(() => {
  //   console.log("im the width: " + windowWidth);
  // }, [windowWidth]);

  const addDropdownClasses = (container, content) => {
    const dropdown = document.getElementById(content);
    if (container === "galerieDropdownRoot") {
      dropdown.classList.add("showDropdownContent");
      dropdown.classList.add("showDropdownContentSmallSize");
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
    document
      .getElementById(container)
      .style.setProperty("margin-bottom", "1vh");
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
          let bottomMargin;
          addDropdownClasses(element.container, element.content);
          global[`${element.container}MobileStatus`] = true;
          if (element.container === "showsDropdownRoot") {
            bottomMargin = "15vh";
          } else {
            bottomMargin = "10vh";
          }
          document
            .getElementById(element.container)
            .style.setProperty("margin-bottom", bottomMargin);

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
    });
    window.addEventListener("scroll", handleDesktopScroll);
    desktopListeners.current = true;
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
    window.removeEventListener("scroll", handleDesktopScroll);
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
    window.addEventListener("touchmove", handleMobileScroll);
    mobileListeners.current = true;
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
      document.body.style.setProperty("--dropdownLinkBGColor", "black");

      console.log("i run at the start for");
      addDesktopEventListeners();
      desktopListeners.current = true;
      // document.body.style.setProperty("--desktopDropdownMargin", "1vh");
      return () => {
        removeDesktopEventListeners();
      };
    } else {
      document.body.style.setProperty("--dropdownLinkBGColor", "#efcc00");
      addMobileEventListeners();
      mobileListeners.current = true;
      return () => {
        removeMobileEventListeners();
      };
    }
  }, []);

  React.useEffect(() => {
    if (windowWidth > 540 && desktopListeners.current !== true) {
      document.body.style.setProperty("--dropdownLinkBGColor", "black");
      setShowMobileNav(false);
      eventListenersParentsArray.forEach((element) => {
        global[`${element.container}MobileStatus`] = false;
      });
      removeMobileEventListeners();
      addDesktopEventListeners();
      // double this??
      // document.body.style.setProperty("--desktopDropdownMargin", "1vh");
    } else if (windowWidth <= 540 && mobileListeners.current !== true) {
      document.body.style.setProperty("--dropdownLinkBGColor", "#efcc00");
      removeDesktopEventListeners();
      addMobileEventListeners();
      // document.body.style.setProperty("--desktopDropdownMargin", "5vh");
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
      eventListenersParentsArray.forEach((element) => {
        global[`${element.container}MobileStatus`] = false;
        removeDropdownClasses(element.container, element.content);
      });
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
              <div>Nächste</div>
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
              // onClick={() => {
              //   document
              //     .getElementById("galerieDropdown")
              //     .classList.remove("showDropdownContent");
              //   document
              //     .getElementById("galerieDropdown")
              //     .classList.remove("showDropdownContentSmallSize");
              //   console.log("im clicked");
              // }}
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
