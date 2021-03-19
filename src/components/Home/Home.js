import React, { useState } from 'react';
import './Home.css'
import { Navbar,Nav,Button } from 'react-bootstrap'
import fakedata from '../../fakedata/fakedata.json'
import Vehicles from '../Vehicles/Vehicles'
import { Link } from "react-router-dom";

const Home = () => {
    console.log(fakedata);

    const [ vehicle , setVehicle ] =  useState (fakedata);

    return (
        <div className="home">
            <div>
                    <Navbar bg="light" variant="light" expand="lg" sticky="top">
                        <Navbar.Brand href="#home"><h1>Ezze Movers</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">

                                <Nav.Link to="/">Home</Nav.Link>
                                <Nav.Link to="/destination">Destination</Nav.Link>
                                <Nav.Link to="/Blog">Blog</Nav.Link>
                                <Nav.Link to="/contact-us">Contact</Nav.Link>
                                <Link to="/login">
                                <Button variant="warning">Login</Button>{' '}
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Navbar>
            </div>
                {
                    vehicle.map ( vehicle => <Vehicles vehicle = {vehicle}></Vehicles> )
                }
        </div>
    );
};

export default Home;