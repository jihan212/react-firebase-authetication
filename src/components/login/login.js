import React from 'react';
import { Button,Form } from 'react-bootstrap'
import './Login.css'
import { FaGoogle,FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';



const Login = () => {
    

    return (
        <div className="login">
            <div className="form">
            <Form>
                <h1>Create an account</h1>
                <br/>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Label> Username Or Email</Form.Label>
                <Form.Control type="email" placeholder="Confirm email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <br/>
                <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="warning" type="submit"> Create An Account </Button>
                <br/>
                <p>Already Have An Account ? <Link>Login</Link> </p>
            </Form>
            </div>
            <div className="buttons">
                <Button  variant="outline-primary"> <FaGoogle /> Continue With Google </Button>
                <Button  variant="outline-primary"> <FaFacebook /> Continue With Facebook </Button>
            </div>
        </div>
    );
};

export default Login;