import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
         <NavLink to="/" className="navbar-brand ms-4 nav-link">User Behavior Data</NavLink>
         <NavLink to="/Search" className="navbar-brand ms-4 nav-link">Search</NavLink>
        </nav>
    );
};

export default Navbar;

