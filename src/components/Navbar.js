import { NavLink } from "react-router-dom";
import React from "react";
import logoSrc from "../pictures/ZwischenspielLogo.svg";
import * as RRD from "react-router-dom";

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

  // width and width update
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
    setDropDownShowsState(false);
    setDropDownGalerieState(false);
    document
      .getElementById("showsDropdownRoot")
      .classList.remove("expandedDropDown");
    document
      .getElementById("galerieDropdownRoot")
      .classList.remove("expandedDropDown");
  }, [location]);

  // set up showMobileNav, update  when mobile Nav changed
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const mobileNavigation = React.useRef(showMobileNav);
  React.useEffect(() => {
    mobileNavigation.current = showMobileNav;
  }, [showMobileNav]);

  React.useEffect(() => {
    let navbarElement = document.getElementById("navigationBar"),
      navLinksElement = document.getElementById("navbarLinks"),
      navLinksLogo = document.getElementById("navbarLogoContainer"),
      linkStyleChildren = navLinksElement.children;

    if (showMobileNav === true) {
      navbarElement.classList.add("showMobileNavNavbar");
      navLinksElement.classList.add("showMobileNavNavLinks");
      navLinksLogo.classList.add("showMobileNavLogo");
      for (let child of linkStyleChildren) {
        child.classList.add("showMobileNavLinkStyle");
      }
    } else {
      navbarElement.classList.remove("showMobileNavNavbar");
      navLinksElement.classList.remove("showMobileNavNavLinks");
      navLinksLogo.classList.remove("showMobileNavLogo");
      for (let child of linkStyleChildren) {
        child.classList.remove("showMobileNavLinkStyle");
        child.classList.remove("active");
      }
    }
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
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.lineWidth = 3;
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
      <div id="navbarLinks" className="hideMobileNav">
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
        <NavLink
          to="/about"
          className="linkStyle"
          onClick={(event) => {
            event.stopPropagation();
            setShowMobileNav(false);
          }}
        >
          Über uns
        </NavLink>

        <div
          id="showsDropdownRoot"
          className="dropdown linkStyle"
          onClick={(event) => {
            document
              .getElementById("galerieDropdownRoot")
              .classList.remove("expandedDropDown");

            if (dropDownShowsState === true) {
              setDropDownShowsState(false);
              event.target.classList.remove("expandedDropDown");
            } else {
              setDropDownShowsState(true);
              event.target.classList.add("expandedDropDown");
            }
          }}
          onMouseOver={() => setDropDownShowsState(true)}
          onMouseOut={() => setDropDownShowsState(false)}
        >
          Shows {String.fromCharCode(0x25be)}
          {dropDownShowsState && (
            <div id="showsDropdown" className="dropDownMenu">
              <NavLink
                to="/naechste-show"
                className="linkStyle dropdownLink"
                onClick={(event) => {
                  console.log(event.target);
                  event.stopPropagation();
                  setShowMobileNav(false);
                }}
              >
                Nächste
              </NavLink>
              <NavLink
                to="/vergangene-shows"
                className="linkStyle dropdownLink"
                onClick={(event) => {
                  event.stopPropagation();
                  setShowMobileNav(false);
                }}
              >
                Vergangene
              </NavLink>
              <NavLink
                to="/calender"
                className="linkStyle dropdownLink"
                onClick={(event) => {
                  event.stopPropagation();
                  setShowMobileNav(false);
                }}
              >
                Kalender
              </NavLink>
            </div>
          )}
        </div>

        <div
          id="galerieDropdownRoot"
          className="dropdown linkStyle"
          onClick={(event) => {
            document
              .getElementById("showsDropdownRoot")
              .classList.remove("expandedDropDown");

            if (dropDownGalerieState === true) {
              setDropDownGalerieState(false);
              event.target.classList.remove("expandedDropDown");
            } else {
              setDropDownGalerieState(true);
              event.target.classList.add("expandedDropDown");
            }
          }}
          onMouseOver={() => setDropDownGalerieState(true)}
          onMouseOut={() => setDropDownGalerieState(false)}
        >
          Galerie {String.fromCharCode(0x25be)}
          {dropDownGalerieState && (
            <div
              id="galerieDropdown"
              className="dropDownMenu dropDownMenuSmall"
            >
              <NavLink
                to="/fotos"
                className="linkStyle dropdownLink"
                onClick={(event) => {
                  event.stopPropagation();
                  setShowMobileNav(false);
                }}
              >
                Fotos
              </NavLink>

              <NavLink
                to="/jingle"
                className="linkStyle dropdownLink"
                onClick={(event) => {
                  event.stopPropagation();
                  setShowMobileNav(false);
                }}
              >
                Jingle
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to="/kontakt"
          className="linkStyle"
          onClick={(event) => {
            event.stopPropagation();
            setShowMobileNav(false);
          }}
        >
          Kontakt
        </NavLink>

        <NavLink
          to="vienna-improv"
          className="linkStyle"
          onClick={(event) => {
            event.stopPropagation();
            setShowMobileNav(false);
          }}
        >
          Vienna Improv (?)
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
