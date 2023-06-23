import React from "react";
import { NavLink } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';

function NavBar() {
    return (
        <Nav variant="pills">
            <NavLink exact to="/">Home </NavLink>
            <NavLink to="/about">About </NavLink>
            <NavLink to="/games">Games </NavLink>
            <NavLink to="/mylist">My List </NavLink>
        </Nav>
    );
}

export default NavBar;