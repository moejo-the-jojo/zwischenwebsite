import { NavLink } from "react-router-dom";
import React from "react";
import logoSrc from "../pictures/ZwischenspielLogo.png";

const Navbar = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [realLogo, setRealLogo] = React.useState();

  React.useEffect(() => {
    const tempLogo = new Image();
    tempLogo.src = logoSrc;
    tempLogo.id = "navbarLogo";
    setRealLogo(() => tempLogo);
  }, []);

  React.useEffect(() => {
    if (realLogo !== undefined) {
      document.getElementById("navbarLogoContainer").appendChild(realLogo);
    }
  });

  React.useEffect(() => {
    if (document.getElementById("navbarLogo") !== null) {
      console.log("hi");
      setIsLoading((prev) => false);
    }
  });

  // const [imageLogo, setImageLogo] = React.useState();

  // React.useEffect(() => {
  //   const promise = new Promise((resolve, reject) => {
  //     const logoImage = new Image();
  //     logoImage.src = logoSrc;
  //     logoImage.id = "navbarLogo";
  //     logoImage.onload = resolve(logoImage);
  //     logoImage.onerror = reject(new Error("something went wrong.."));
  //   });

  //   promise.then((result) => setImageLogo(result));
  //   setIsLoading(false);
  //   console.log(imageLogo);
  // });

  // const theRealLoading = React.useRef(isLoading);

  // React.useEffect(() => {
  //   theRealLoading.current = isLoading;
  // }, [isLoading]);

  // const dropdownHandling = (container, content) => {
  //   const button = document.getElementById(container),
  //     dropdown = document.getElementById(content);
  //   button.addEventListener("mouseover", () => {
  //     dropdown.classList.add("showDropdownContent");
  //   });

  //   button.addEventListener("mouseout", () => {
  //     dropdown.classList.remove("showDropdownContent");
  //   });
  // };

  // React.useEffect(() => {
  //   if (theRealLoading.current === false) {
  //     dropdownHandling("showsDropdownRoot", "showsDropdown");
  //   }
  // }, [isLoading]);

  // React.useEffect(() => {
  //   if (theRealLoading.current === false) {
  //     dropdownHandling("galerieDropdownRoot", "galerieDropdown");
  //   }
  // }, [isLoading]);

  // React.useEffect(() => {
  //   if (theRealLoading.current === false && logo !== undefined) {
  //     document.getElementById("navbarLogoContainer").appendChild(logo);
  //     console.log("i run??");
  //   }
  // }, [isLoading, logo]);

  // React.useEffect(() => {
  //   if (logo.complete === true) {
  //     setIsLoading(false);
  //   }
  // }, [logo]);

  // React.useEffect(() => {
  //   console.log(
  //     "i show, whenever isLoading is changing " + theRealLoading.current
  //   );
  // });

  return (
    isLoading === false && (
      <div id="navigationBar">
        <div id="navbarLinks">
          <NavLink to="/">
            <div id="navbarLogoContainer">
              {isLoading.toString()}
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
