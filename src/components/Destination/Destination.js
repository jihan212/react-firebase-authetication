import React from 'react';
import { Button,Form } from 'react-bootstrap'
import './Destination.css'
import mapImg from '../../image/Map.png'

const Destination = () => {
    return (
        <div>
            <div className="destination">
            <div className="card">
            <Form>
                <br/>
                <Form.Group controlId="formBasicText">
                <Form.Label>Pick From</Form.Label>
                <Form.Control type="text" placeholder="From Place Name" />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                <Form.Label>Pick To</Form.Label>
                <Form.Control type="text" placeholder="Destination Place Name" />
                </Form.Group>
                <Button variant="warning" type="search"> Search </Button>
                <br/>
            </Form>
            </div>
            <div className="map-img">
                <img src={mapImg} alt=""/>
            </div>
            </div>
        </div>
    );
};

export default Destination;