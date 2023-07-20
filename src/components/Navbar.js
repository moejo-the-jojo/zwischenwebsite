import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div id="navbarz">
            <NavLink to="/about" className="myFirstLink">
                About
            </NavLink>
            <NavLink to="/">
                Home
            </NavLink>
        </div>
    )
}

export default Navbar;