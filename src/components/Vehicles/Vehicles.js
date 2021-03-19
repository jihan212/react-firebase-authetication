import React from 'react';
import { Button,Card } from 'react-bootstrap'
import './Vehicles.css'
import { Link } from "react-router-dom";

const Vehicles = (props) => {
    const {image , name} = props.vehicle;
    return (
        <div className="grid">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to="/destination">
                <Button variant="warning">Book Now</Button>
                </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Vehicles;