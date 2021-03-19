import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { userContext } from "../Context/Context";
import { signInWithGoogle } from "../LoginManager/LoginManager";
import "./Login.css";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useContext(userContext)
  console.log(newUser)
 
  //handle google sign in
  const handleGoogleSignIn = () => {
    console.log('google sign in clicked')
    signInWithGoogle().then(res => {
      setUser(res)
    })
  };
  return (
    <div className="login-form-container">
      <Form className="login-form-custom-style">
        {newUser ? (
          <h1 className="custom-form-header">Registration</h1>
        ) : (
          <h1 className="custom-form-header">Login</h1>
        )}
        {newUser && (
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Full Name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        )}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {newUser && (
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
        )}
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onChange={() => setNewUser(!newUser)}
            label="Register as a New User..."
          />
        </Form.Group>
        <Button variant="success" className="sign-button" type="submit">
          Submit
        </Button>
        <p className="social-button-devider">OR</p>
        <Button
          variant="success"
          className="sign-button with-social"
          onClick={handleGoogleSignIn}
        >
          <FontAwesomeIcon icon={faGoogle} /> Continue with Google
        </Button>
        <Button
          variant="success"
          className="sign-button with-social"
        >
          <FontAwesomeIcon icon={faFacebook} /> Continue With Facebook
        </Button>
      </Form>
    </div>
  );
};

export default Login;
