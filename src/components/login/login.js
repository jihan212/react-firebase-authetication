import React, { useContext, useState } from 'react';
import { Button,Form } from 'react-bootstrap'
import './Login.css'
import { FaGoogle,FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }

const Login = () => {

    const [user , setUser] = useState({
        isSigned : false,
        name:'',
        email:'',
        password:''
    });

    const [loggedInUser,setLoggedInUser] = useContext(userContext);

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            const newUser = {...user};
            setUser(newUser);
            setLoggedInUser(newUser);    
        }
            )
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
  });
    }

    const handleSubmit = () => {}

    return (
        <div className="login">
            <div className="form">
                <h1>Email:{user.email}</h1>
            <Form onSubmit={handleSubmit}>
                <h1>Create an account</h1>
                <br/>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  type="email" placeholder="Enter email" />
                <Form.Label> Username Or Email</Form.Label>
                <Form.Control  type="email" placeholder="Confirm email" />
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
                <Button onClick = {handleGoogleSignIn} variant="warning" type="submit"> Create An Account </Button>
            </Form>
            </div>
            <div className="buttons">
                <Button onClick = {handleGoogleSignIn}  variant="outline-primary"> <FaGoogle /> Continue With Google </Button>
                <Button  variant="outline-primary"> <FaFacebook /> Continue With Facebook </Button>
            </div>
        </div>
    );
};

export default Login;