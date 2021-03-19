import React, { useContext, useState } from 'react';
import { Button,Form } from 'react-bootstrap'
import './Login.css'
import { FaGoogle,FaFacebook } from 'react-icons/fa';
import { Link, useHistory, useLocation } from "react-router-dom";
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

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            const newUser = {...user};
            setLoggedInUser(newUser);  
            history.replace(from);  
        }
            )
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
  });
    }

    const handleSubmit = (event) => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => { 
                var user = userCredential.user;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
            event.preventDefault();
    }
    return (
        <div className="login">
            <div className="form">
            <Form onSubmit={handleSubmit}>
                <h1>Create an account</h1>
                <br/>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  type="email" placeholder="Enter email" required />
                <Form.Label> Username Or Email</Form.Label>
                <Form.Control  type="email" placeholder="Confirm email" required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
                <br/>
                <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <input className="submitBtn" type="submit" value="Create An Account"/>
                <br/>
                <p>Already have an account? <a href="">Login</a> </p>
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