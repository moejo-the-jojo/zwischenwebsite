// <div
//   id="showsDropdownRoot"
//   className="dropdown linkStyle"
//   onMouseDown={(event) => {
//     setDropDownShowsState((prev) => !prev);
//     if (dropDownShowsState === true) {
//       addDropdownClasses(event.target);

//       // let bottomMargin;
//       // addDropdownClasses(element.container, element.content);
//       // global[`${element.container}MobileStatus`] = true;
//       // bottomMargin =
//       //   element.container === "showsDropdownRoot" ? "15vh" : "10vh";
//       // // if (element.container === "showsDropdownRoot") {
//       // //   bottomMargin = "15vh";
//       // // } else {
//       // //   bottomMargin = "10vh";
//       // // }
//       // document
//       //   .getElementById(element.container)
//       //   .style.setProperty("margin-bottom", bottomMargin);

//       // console.log("i run");
//     }
//     //put mobile dropdown here??!
//   }}
// >
//   Shows &#9662;
//   <div id="showsDropdown" className="dropdownContent">
//     <NavLink
//       to="/naechste-show"
//       className="linkStyle dropdownLink"
//       onClick={() => {
//         document
//           .getElementById("showsDropdown")
//           .classList.remove("showDropdownContent");
//       }}
//     >
//       <div>Nächste</div>
//     </NavLink>
//     <NavLink
//       to="/vergangene-shows"
//       className="linkStyle dropdownLink"
//       onClick={() => {
//         document
//           .getElementById("showsDropdown")
//           .classList.remove("showDropdownContent");
//       }}
//     >
//       Vergangene
//     </NavLink>
//     <NavLink
//       to="/calender"
//       className="linkStyle dropdownLink"
//       onClick={() => {
//         document
//           .getElementById("showsDropdown")
//           .classList.remove("showDropdownContent");
//       }}
//     >
//       Kalender
//     </NavLink>
//   </div>
// </div>

//   const addDropdownClasses = (container, content) => {
//     const dropdown = document.getElementById(content);
//     if (container === "galerieDropdownRoot") {
//       dropdown.classList.add(
//         "showDropdownContent",
//         "showDropdownContentSmallSize"
//       );
//     } else {
//       dropdown.classList.add("showDropdownContent");
//     }
//   };

//   const removeDropdownClasses = (container, content) => {
//     const dropdown = document.getElementById(content);
//     dropdown.classList.remove(
//       "showDropdownContentSmallSize",
//       "showDropdownContent"
//     );
//     document
//       .getElementById(container)
//       .style.setProperty("margin-bottom", "1vh");
//   };

//   // handle add/remove droppdown classes
//   React.useEffect(() => {
//         eventListenersParentsArray.forEach((element) => {
//           // global[element.container] = () => {
//           //   addDropdownClasses(element.container, element.content);
//           // };
//           // global[`${element.container}remover`] = () => {
//           //   removeDropdownClasses(element.container, element.content);
//           // };
//           global[`${element.container}MobileStatus`] = false;
//           global[`${element.container}MobileToggle`] = () => {
//             console.log(global[`${element.container}MobileStatus`]);
//             console.log("yes im attached <3");
//             if (global[`${element.container}MobileStatus`] === false) {
//               let bottomMargin;
//               addDropdownClasses(element.container, element.content);
//               global[`${element.container}MobileStatus`] = true;
//               bottomMargin =
//                 element.container === "showsDropdownRoot" ? "15vh" : "10vh";
//               // if (element.container === "showsDropdownRoot") {
//               //   bottomMargin = "15vh";
//               // } else {
//               //   bottomMargin = "10vh";
//               // }
//               document
//                 .getElementById(element.container)
//                 .style.setProperty("margin-bottom", bottomMargin);

//               console.log("i run");
//             } else {
//               removeDropdownClasses(element.container, element.content);
//               global[`${element.container}MobileStatus`] = false;
//             }
//           };
//         });
//       }, []);

//   const addDesktopEventListeners = () => {
//     eventListenersParentsArray.forEach((element) => {
//       const button = document.getElementById(element.container);
//       //function direkt hier??
//       //button.addEventListener("mouseover", global[element.container]);
//       button.addEventListener("mouseover", () => {
//         addDropdownClasses(element.container, element.content);
//       });

//       button.addEventListener("mouseout", () => {
//         removeDropdownClasses(element.container, element.content);
//       });
//       button.addEventListener("onclick", global[`${element.container}remover`]);
//     });
//     window.addEventListener("scroll", handleScroll);
//     // setDesktopListeners(true);
//   };

//   const removeDesktopEventListeners = () => {
//     eventListenersParentsArray.forEach((element) => {
//       const button = document.getElementById(element.container);
//       button.removeEventListener("mouseover", global[element.container]);
//       button.removeEventListener(
//         "mouseout",
//         global[`${element.container}remover`]
//       );
//       button.removeEventListener(
//         "onclick",
//         global[`${element.container}remover`]
//       );
//     });
//     window.removeEventListener("scroll", handleScroll);
//     // setDesktopListeners(false);
//   };

//   const addMobileEventListeners = () => {
//     eventListenersParentsArray.forEach((element) => {
//       const button = document.getElementById(element.container);
//       button.addEventListener(
//         "mousedown",
//         global[`${element.container}MobileToggle`]
//       );
//     });
//     // window.addEventListener("touchmove", handleScroll);
//     // setMobileListeners(true);
//   };

//   const removeMobileEventListeners = () => {
//     eventListenersParentsArray.forEach((element) => {
//       const button = document.getElementById(element.container);
//       button.removeEventListener(
//         "mousedown",
//         global[`${element.container}MobileToggle`]
//       );
//     });
//     window.removeEventListener("touchmove", handleScroll);
//     // setMobileListeners(false);
//   };

//   //handle add/remove event listeners
//   React.useEffect(() => {
//     // CHECK FOR DEVICE, NOT WIDTH
//     if (currentWindowWidth.current > 540) {
//       // document.body.style.setProperty("--dropdownLinkBGColor", "black");
//       console.log("i run at the start for");
//       addDesktopEventListeners();
//       return () => {
//         removeDesktopEventListeners();
//       };
//     } else {
//       // document.body.style.setProperty("--dropdownLinkBGColor", "#efcc00");
//       addMobileEventListeners();
//       // if (
//       //   document.getElementById("realRoutesContainer").clientHeight >
//       //   window.innerHeight
//       // ) {
//       //   window.addEventListener("touchmove", handleScroll);
//       // }
//       return () => {
//         removeMobileEventListeners();
//       };
//     }
//   }, []);
