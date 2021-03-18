import React from 'react';
import { Button,Card } from 'react-bootstrap'
import './Destination.css'

const Destination = (props) => {
    const {image , name} = props.vehicle;
    return (
        <div>
            <div className="grid" >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="warning">Book Now</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default Destination;