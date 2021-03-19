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
            <div className="card">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.3875992415!2d90.27889351177757!3d23.780572945132324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616181167586!5m2!1sen!2sbd" ></iframe>
            </div>
            </div>
        </div>
    );
};

export default Destination;