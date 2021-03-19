import React from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div>
                    <Navbar bg="light" variant="light" expand="lg" sticky="top">
                        <Navbar.Brand href="/"><h1>Ezze Movers</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">

                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/destination">Destination</Nav.Link>
                                <Nav.Link href="/Blog">Blog</Nav.Link>
                                <Nav.Link href="/contact-us">Contact</Nav.Link>
                                <Link to="/login">
                                <Button variant="warning">Login</Button>{' '}
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Navbar>
            </div>
        </div>
    );
};

export default NavBar;