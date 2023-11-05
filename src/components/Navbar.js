import { NavLink } from "react-router-dom";
import React from "react";
import logoSrc from "../pictures/ZwischenspielLogo.svg";
import * as RRD from "react-router-dom";

const displayMobileNavigation = {
  "--showNavbarLinks": "flex",
  "--hideNavbarLogo": "none",
  "--navbarFlexDirection": "column",
  "--navbarFlexAlign": "flex-start",
};
const hideMobileNavigation = {
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
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const mobileNavigation = React.useRef(showMobileNav);
  React.useEffect(() => {
    mobileNavigation.current = showMobileNav;
  }, [showMobileNav]);

  const [currentScrollPosition, setCurrentScrollPosition] = React.useState(
    window.scrollY
  );
  const currentScrollP = React.useRef(currentScrollPosition);
  React.useEffect(() => {
    currentScrollP.current = currentScrollPosition;
  }, [currentScrollPosition]);

  const handleScroll = () => {
    const navBar = document.getElementById("navigationBar"),
      navLogo = document.getElementById("navbarLogo"),
      routesContainer = document.getElementById("realRoutesContainer");
    let wantedNavHeight, wantedLogoHeight, wantedLogoOffset, wantedRoutesHeight;
    if (currentWindowWidth.current > 540) {
      wantedNavHeight = "10vh";
      wantedLogoHeight = "16.5vh";
      wantedLogoOffset = "10vh";
      wantedRoutesHeight = "100%";
      console.log(currentWindowWidth.current);
    } else if (currentWindowWidth.current <= 540) {
      wantedNavHeight = "5vh";
      wantedLogoHeight = "15vh";
      wantedLogoOffset = "10.5vh";
      wantedRoutesHeight = "100%";
      if (mobileNavigation.current === true) {
        wantedNavHeight = "100vh";
      }
    }

    let currentScrollPopo = window.scrollY;
    let scrollDirection;

    setTimeout(() => {
      if (window.scrollY > currentScrollPopo) {
        scrollDirection = "down";
      } else if (window.scrollY === currentScrollPopo) {
        scrollDirection = scrollDirection;
      } else {
        scrollDirection = "up";
      }
      currentScrollPopo = window.scrollY;
      console.log(scrollDirection);
      if (scrollDirection === "down") {
        setTimeout(() => {
          document.getElementById("mobileNavbarToggle").style.top = "2.5vh";
          navBar.style.height = wantedNavHeight;
          navLogo.style.marginTop = wantedLogoOffset;
          navLogo.style.height = wantedLogoHeight;
          routesContainer.style.height = wantedRoutesHeight;
          if (currentWindowWidth.current <= 540) {
            navLogo.style.width = "auto";
          }
        }, 100);
      } else if (window.scrollY === 0) {
        setTimeout(() => {
          if (window.scrollY === 0) {
            if (currentWindowWidth.current > 540) {
              wantedNavHeight = "20vh";
              wantedLogoHeight = "20vh";
              wantedLogoOffset = "0";
              //
              wantedRoutesHeight = "80vh";
              // wantedRoutesHeight = "100%";
            } else if (currentWindowWidth.current <= 540) {
              wantedNavHeight = "15vh";
              wantedLogoHeight = "auto";
              navLogo.style.width = "33vw";
              wantedLogoOffset = "auto";
              wantedRoutesHeight = "85vh";
              // wantedRoutesHeight = "100%";

              if (mobileNavigation.current === true) {
                wantedNavHeight = "100vh";
              }
            }
            document.getElementById("mobileNavbarToggle").style.top = "5vh";
            navBar.style.height = wantedNavHeight;
            navLogo.style.height = wantedLogoHeight;
            navLogo.style.marginTop = wantedLogoOffset;
            routesContainer.style.minHeight = wantedRoutesHeight;
          }
        }, 10);
      }
    }, 50);

    // console.log(scrollDirection);
    // if (window.scrollY > 0) {
    //   setTimeout(() => {
    //     document.getElementById("mobileNavbarToggle").style.top = "2.5vh";
    //     navBar.style.height = wantedNavHeight;
    //     navLogo.style.marginTop = wantedLogoOffset;
    //     navLogo.style.height = wantedLogoHeight;
    //     routesContainer.style.height = wantedRoutesHeight;
    //     if (currentWindowWidth.current <= 540) {
    //       navLogo.style.width = "auto";
    //     }
    //   }, 100);
    // } else if (window.scrollY === 0) {
    //   setTimeout(() => {
    //     if (window.scrollY === 0) {
    //       if (currentWindowWidth.current > 540) {
    //         wantedNavHeight = "20vh";
    //         wantedLogoHeight = "20vh";
    //         wantedLogoOffset = "0";
    //         //
    //         wantedRoutesHeight = "80vh";
    //         // wantedRoutesHeight = "100%";
    //       } else if (currentWindowWidth.current <= 540) {
    //         wantedNavHeight = "15vh";
    //         wantedLogoHeight = "auto";
    //         navLogo.style.width = "33vw";
    //         wantedLogoOffset = "auto";
    //         wantedRoutesHeight = "85vh";
    //         // wantedRoutesHeight = "100%";

    //         if (mobileNavigation.current === true) {
    //           wantedNavHeight = "100vh";
    //         }
    //       }
    //       document.getElementById("mobileNavbarToggle").style.top = "5vh";
    //       navBar.style.height = wantedNavHeight;
    //       navLogo.style.height = wantedLogoHeight;
    //       navLogo.style.marginTop = wantedLogoOffset;
    //       routesContainer.style.minHeight = wantedRoutesHeight;
    //     }
    //   }, 100);
    // }
  };

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const desktopListeners = React.useRef(false),
    mobileListeners = React.useRef(false),
    currentWindowWidth = React.useRef(windowWidth);

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    currentWindowWidth.current = windowWidth;
  }, [windowWidth]);

  React.useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

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
    window.addEventListener("scroll", handleScroll);
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
    window.removeEventListener("scroll", handleScroll);
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
    window.addEventListener("touchmove", handleScroll);
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
    window.removeEventListener("touchmove", handleScroll);
    mobileListeners.current = false;
  };

  React.useEffect(() => {
    if (currentWindowWidth.current > 540) {
      document.body.style.setProperty("--dropdownLinkBGColor", "black");

      console.log("i run at the start for");
      addDesktopEventListeners();
      desktopListeners.current = true;
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
    if (currentWindowWidth.current > 540 && desktopListeners.current !== true) {
      document.body.style.setProperty("--dropdownLinkBGColor", "black");
      setShowMobileNav(false);
      eventListenersParentsArray.forEach((element) => {
        global[`${element.container}MobileStatus`] = false;
      });
      removeMobileEventListeners();
      addDesktopEventListeners();
    } else if (
      currentWindowWidth.current <= 540 &&
      mobileListeners.current !== true
    ) {
      document.body.style.setProperty("--dropdownLinkBGColor", "#efcc00");
      removeDesktopEventListeners();
      addMobileEventListeners();
    }

    if (currentWindowWidth.current > 540) {
      document
        .getElementById("navigationBar")
        .style.setProperty("height", "20vh");
    }
  }, [windowWidth]);

  const location = RRD.useLocation();
  React.useEffect(() => {
    setShowMobileNav(false);
    if (document.getElementById("displayEvent")) {
      document.body.removeChild(document.getElementById("displayEvent"));
    }
    if (document.getElementById("mobileNavbarToggle")) {
      setTimeout(() => {
        document
          .getElementById("mobileNavbarToggle")
          .classList.remove("rotated");
        setRotated(false);
      }, 100);
    }
  }, [location]);

  React.useEffect(() => {
    console.log("now im the switch and i work");
    let currentSettings;
    if (mobileNavigation.current === false) {
      currentSettings = hideMobileNavigation;
      eventListenersParentsArray.forEach((element) => {
        global[`${element.container}MobileStatus`] = false;
        removeDropdownClasses(element.container, element.content);
        console.log("i set the classes to nonnav");
      });
    } else {
      currentSettings = displayMobileNavigation;
    }
    for (let pair in currentSettings) {
      document.body.style.setProperty(pair, currentSettings[pair]);
    }
    if (
      mobileNavigation.current === true &&
      currentWindowWidth.current <= 540
    ) {
      document.getElementById("navigationBar").style.height = "100vh";
      document.getElementById("navigationBar").style.position = "fixed";
    } else if (
      mobileNavigation.current === false &&
      window.scrollY > 0 &&
      currentWindowWidth.current <= 540
    ) {
      document.getElementById("navigationBar").style.height = "5vh";
      document.getElementById("navigationBar").style.position = "sticky";
    } else if (
      mobileNavigation.current === false &&
      window.scrollY === 0 &&
      currentWindowWidth.current <= 540
    ) {
      document.getElementById("navigationBar").style.height = "15vh";
      document.getElementById("navigationBar").style.position = "sticky";
    }
  }, [showMobileNav]);

  const [dataURL, setDataURL] = React.useState(null);

  React.useEffect(() => {
    const myCanvas = document.createElement("canvas");
    document.body.appendChild(myCanvas);
    myCanvas.height = 100;
    myCanvas.width = 100;
    myCanvas.style.display = "none";
    const ctx = myCanvas.getContext("2d");
    ctx.width = 100;
    ctx.height = 100;
    ctx.moveTo(25, 0);
    ctx.lineTo(75, 0);
    ctx.moveTo(25, 100);
    ctx.lineTo(75, 100);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.moveTo(0, 50);
    ctx.lineTo(100, 50);
    ctx.stroke();
    setDataURL(myCanvas.toDataURL());
  }, []);

  const [rotated, setRotated] = React.useState(false);
  const currentRotation = React.useRef(rotated);
  React.useEffect(() => {
    currentRotation.current = rotated;
  }, [rotated]);

  return (
    <div id="navigationBar">
      {dataURL !== null && (
        <img
          id="mobileNavbarToggle"
          src={dataURL}
          alt="optionsButton"
          onClick={() => {
            setShowMobileNav((prev) => !prev);
            if (currentRotation.current === false) {
              document
                .getElementById("mobileNavbarToggle")
                .classList.add("rotated");
            } else {
              document
                .getElementById("mobileNavbarToggle")
                .classList.remove("rotated");
            }
            setRotated((prev) => !prev);
          }}
        ></img>
      )}
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
