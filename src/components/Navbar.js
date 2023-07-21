import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div id="navigationBar">
            <img id="navbarLogo" alt="logo" />

            <div id="navbarLinks">
                <NavLink to="/about" className="linkStyle">
                    Über uns
                </NavLink>

                <div id="showsDropdown" className="dropdown linkStyle">
                    Shows
                    <div className="dropdownContent linkStyle">
                        <NavLink to="/" className="linkStyle">
                            Nächste
                        </NavLink>

                        <NavLink className="linkStyle">
                            Vergangene
                        </NavLink>
                    </div>
                </div>

                <div id="galerieDropdown" className="dropdown linkStyle">
                    Galerie
                    <div className="dropdownContent linkStyle">
                        <NavLink className="linkStyle">
                            Bilder
                        </NavLink>

                        <NavLink className="linkStyle">
                            Jingle
                        </NavLink>
                    </div>
                </div>

                <NavLink className="linkStyle">
                    Kontakt
                </NavLink>

                <NavLink className="linkStyle">
                    Vienna Improv
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;