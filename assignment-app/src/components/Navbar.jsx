import React from "react";
      
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
         <a href="/" className="navbar-brand ms-4 nav-link">User Behavior Data</a>
         <a href="/Search" className="navbar-brand ms-4 nav-link">Search</a>
        </nav>
    );
};   

export default Navbar;

