import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Home </NavLink>
            <NavLink to="/about">About </NavLink>
            <NavLink to="/games">Games </NavLink>
            <NavLink to="/games">Wishlist </NavLink>
            <NavLink to="/games">Add Game </NavLink>
        </nav>
    );
}

export default NavBar;