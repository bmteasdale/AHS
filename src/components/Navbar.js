import React from 'react';
import '../App.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function NavBar() {
    return (
        <div>
            <Navbar bg="light" variant="light" id="navbar">
                <Navbar.Brand href="/"><img className="navbar-logo" alt="AHS_Logo" src={require("../res/AHS Logo.png")} /></Navbar.Brand>
                <Nav className="navbar-nav ml-auto">
                    <Nav.Link className="nav-item" href="#contact">
                        <Button variant="outline-danger">Contact Us</Button>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
