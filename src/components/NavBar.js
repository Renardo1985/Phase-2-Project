import React from "react";
import { NavLink } from "react-router-dom"
import { Navbar, Nav, Container} from "react-bootstrap"


function NavBar() {
    return (
       
        <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid>
            <Nav className="me-auto">
            <NavLink className="nav-link" exact to="/" >Home</NavLink>           
            <NavLink className="nav-link" exact to="/games" >Games</NavLink>
            <NavLink className="nav-link" to="/games/favorites" >Favorites</NavLink>
            </Nav>
            <Navbar.Collapse className="justify-content-end">            
            <NavLink className="nav-link" to="/about" >About</NavLink>           
            </Navbar.Collapse>        
        </Container>
        </Navbar>
        
       
    );
}

export default NavBar;