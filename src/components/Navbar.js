import React from 'react';
import '../App.css';
import { Navbar } from 'react-bootstrap';

export default function NavBar() {
    return (
        <div>
            <Navbar bg="light" variant="light" id="navbar">
                <Navbar.Brand href="/"><img className="navbar-logo" alt="AHS_Logo" src={require("../res/AHS Logo.png")} /></Navbar.Brand>
            </Navbar>
        </div>
    )
}
