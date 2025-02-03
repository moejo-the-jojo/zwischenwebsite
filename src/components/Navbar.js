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
  // set scroll position, update when change
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
              wantedRoutesHeight = "80vh";
            } else if (currentWindowWidth.current <= 540) {
              wantedNavHeight = "15vh";
              wantedLogoHeight = "auto";
              navLogo.style.width = "33vw";
              wantedLogoOffset = "auto";
              wantedRoutesHeight = "85vh";

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
        }, 50);
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

  // const [desktopListeners, setDesktopListeners] = React.useState(false);
  // const currentDesktopListeners = React.useRef(desktopListeners);
  // React.useEffect(() => {
  //   currentDesktopListeners.current = desktopListeners;
  // }, [desktopListeners]);

  // const [mobileListeners, setMobileListeners] = React.useState(false);
  // const currentMobileListeners = React.useRef(mobileListeners);
  // React.useEffect(() => {
  //   currentMobileListeners.current = mobileListeners;
  // }, [mobileListeners]);

  // width and update width
  // do i need width??
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const currentWindowWidth = React.useRef(windowWidth);
  React.useEffect(() => {
    currentWindowWidth.current = windowWidth;
  }, [windowWidth]);
  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  const [dropDownShowsState, setDropDownShowsState] = React.useState(false);
  const [dropDownGalerieState, setDropDownGalerieState] = React.useState(false);

  // React.useEffect(() => {
  //   if (currentWindowWidth.current > 540 && desktopListeners.current !== true) {
  //     document.body.style.setProperty("--dropdownLinkBGColor", "black");
  //     setShowMobileNav(false);
  //     eventListenersParentsArray.forEach((element) => {
  //       global[`${element.container}MobileStatus`] = false;
  //     });
  //     removeMobileEventListeners();
  //     addDesktopEventListeners();
  //   } else if (
  //     currentWindowWidth.current <= 540 &&
  //     mobileListeners.current !== true
  //   ) {
  //     document.body.style.setProperty("--dropdownLinkBGColor", "#efcc00");
  //     removeDesktopEventListeners();
  //     addMobileEventListeners();
  //   }

  //   // ???
  //   if (currentWindowWidth.current > 540) {
  //     document
  //       .getElementById("navigationBar")
  //       .style.setProperty("height", "20vh");
  //   }
  //   // ???
  // }, [currentWindowWidth.current]);

  //handle links
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

    // ???
    // if (
    //   document.getElementById("realRoutesContainer").clientHeight >
    //   window.innerHeight
    // ) {
    //   window.addEventListener("touchmove", handleScroll);
    // } else {
    //   window.removeEventListener("touchmove", handleScroll);
    // }
    // ???
  }, [location]);

  // set up showMobileNav, update  when mobile Nav changed
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const mobileNavigation = React.useRef(showMobileNav);
  React.useEffect(() => {
    mobileNavigation.current = showMobileNav;
  }, [showMobileNav]);

  // show/hide mobile nav
  React.useEffect(() => {
    console.log("now im the switch and i work");
    let currentSettings;
    // if (windowWidth.current <= 540) {
    console.log(currentWindowWidth.current);
    if (showMobileNav === false) {
      currentSettings = hideMobileNavigation;
      eventListenersParentsArray.forEach((element) => {
        // removeDropdownClasses(element.container, element.content);
        // global[`${element.container}MobileStatus`] = false;
        console.log("i set the classes to nonnav");
      });
    } else {
      currentSettings = displayMobileNavigation;
    }
    for (let pair in currentSettings) {
      document.body.style.setProperty(pair, currentSettings[pair]);
    }
    if (showMobileNav === true) {
      document.getElementById("navigationBar").style.height = "100vh";
      document.getElementById("navigationBar").style.position = "fixed";
    } /* else if (
        showMobileNav === false &&
        window.scrollY > 0 &&
        currentWindowWidth.current <= 540
      ) {
        document.getElementById("navigationBar").style.height = "5vh";
        document.getElementById("navigationBar").style.position = "sticky";
      } */ else if (
      showMobileNav === false &&
      currentWindowWidth.current <= 540
    ) {
      window.scrollTo(0, 0);
      document.getElementById("navigationBar").style.height = "15vh";
      document.getElementById("navigationBar").style.position = "sticky";
    }
    // }
  }, [showMobileNav]);

  // create settings icon
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

  // set navbar to 20vh with widthchange
  React.useEffect(() => {
    if (currentWindowWidth.current > 540) {
      document.getElementById("navigationBar").style.height = "20vh";
    }
  }, [currentWindowWidth.current]);

  return (
    <div id="navigationBar">
      <div id="navbarLinks">
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
        <NavLink to="/">
          <div id="navbarLogoContainer">
            <img src={logoSrc} alt="zwischenspielLogo" id="navbarLogo"></img>
          </div>
        </NavLink>

        {/*so the links stay on the right side*/}
        <div className="linkStyle" id="placeholderLink" />
        <NavLink to="/about" className="linkStyle">
          Über uns
        </NavLink>

        <div
          id="showsDropdownRoot"
          className="dropdown linkStyle"
          onClick={() => {
            dropDownShowsState
              ? setDropDownShowsState(false)
              : setDropDownShowsState(true);
          }}
          onMouseOver={() => setDropDownShowsState(true)}
          onMouseOut={() => setDropDownShowsState(false)}
        >
          Shows {String.fromCharCode(0x25be)}
          {dropDownShowsState && (
            <div id="showsDropdown">
              <NavLink
                to="/naechste-show"
                className="linkStyle dropdownLink"
                onClick={(event) => {
                  event.stopPropagation();
                  setDropDownShowsState(false);
                }}
              >
                Nächste
              </NavLink>
              <NavLink
                to="/vergangene-shows"
                className="linkStyle dropdownLink"
                onClick={(event) => {
                  event.stopPropagation();
                  setDropDownShowsState(false);
                }}
              >
                Vergangene
              </NavLink>
              <NavLink
                to="/calender"
                className="linkStyle dropdownLink"
                onClick={(event) => {
                  event.stopPropagation();
                  setDropDownShowsState(false);
                }}
              >
                Kalender
              </NavLink>
            </div>
          )}
        </div>

        <div id="galerieDropdownRoot" className="dropdown linkStyle">
          Galerie {String.fromCharCode(0x25be)}
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
