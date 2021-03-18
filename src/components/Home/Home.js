import React, { useState } from 'react';
import bg from '../../image/bg.png'
import './Home.css'
import { Navbar,Nav,Button } from 'react-bootstrap'
import fakedata from '../../fakedata/fakedata.json'
import Destination from '../Destination/Destination';

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
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/">Destination</Nav.Link>
                                <Nav.Link href="/">Blog</Nav.Link>
                                <Nav.Link href="/contact-us">Contact</Nav.Link>
                                <Button variant="warning">Login</Button>{' '}
                            </Nav>
                        </Navbar.Collapse>
                        </Navbar>
            </div>
                {
                    vehicle.map ( vehicle => <Destination vehicle = {vehicle}></Destination> )
                }

            <img src={bg} alt=""/>
        </div>
    );
};

export default Home;