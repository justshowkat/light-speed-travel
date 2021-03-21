import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../Context/Context";
import { crateWithEmailPassword, loginWithMailAndPassword, signInWithFacebook, signInWithGoogle } from "../LoginManager/LoginManager";
import "./Login.css";

const Login = () => {
  const [user, setUser, newUser, setNewUser] = useContext(userContext)
 
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  //handle google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(res => {
      setUser(res)
      history.replace(from);
    })
  };
  //handle facebook sign in
  const handleFacebookSignIn = () => {
    signInWithFacebook()
    //i have joined meet session. however they cannot solve the problem(facebook in development on), and facebook is not returning me anything. so they advice me to keep it like this. 
  };
  // this functions will execute when field is changed (onBlur)
  //for mail field
  const handleEmail = (e) => {
    const re = /\S+@\S+\.\S+/;
    !re.test(e.target.value) ? alert('please insert a valid email') : user.email = e.target.value
  }
  //for password
  const handlePassword = (e) => {
    e.target.value.length > 6 ? user.password = e.target.value : alert('password must be bigger than 6 word')
  }

  const handleConfirmPassword = (e) => {
    user.confirmPassword = e.target.value
    const isValid = (user.confirmPassword === user.password)
    isValid === false && (user.password = ''  && alert(`password didn't match`))
    console.log(user, isValid)
  }

  const handleLoginButton =(e) =>{

    const mail = document.getElementById('email').value
    const password = document.getElementById('password').value

    user.email = mail
    user.password = password

    console.log(mail, password)

    mail && password ? (
      loginWithMailAndPassword(user.email, user.password).then(res => {
        if (!res.errorCode) {
          setUser(res)
          history.replace(from)
        } else {
          alert(res.errorMessage)
        }
        // console.log(res.errorCode? true : false)
        
      })
    ): alert('please enter a valid user name/email and password')
    e.preventDefault()
  }
  const handleRegistrationButton =(e) =>{
    const {name, email, password, confirmPassword} = user

    if(name && email && password && confirmPassword){
      crateWithEmailPassword(email, password, name).then(res => {
        console.log('registration response console', res)
        if (!res.errorCode) {
          setUser({
            isSignedIn: true,
            name:'',
            email: res.email,
            password: '',
            confirmPassword: '',
            image: ''
          })
          history.replace(from)
        } else {
          alert(res.errorMessage)
        }
        
      })
    }else {
      alert(`Please Double check your user mail and password or retype it again`)
    }

    e.preventDefault()
  }
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
            <Form.Control type="text" onBlur={(e) => (user.name = e.target.value)} placeholder="Enter Your Full Name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        )}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control id='email' onBlur={handleEmail} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control id='password' type="password" onBlur={handlePassword} placeholder="Password" />
        </Form.Group>
        {newUser && (
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" onBlur={handleConfirmPassword} placeholder="Confirm Password" />
          </Form.Group>
        )}
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onChange={() => setNewUser(!newUser)}
            label="Register as a New User..."
          />
        </Form.Group>
        {!newUser && (<Button onClick={handleLoginButton} className="sign-button" type="submit">
          Login
        </Button>)}
        {newUser && (<Button id='regButton' onClick={handleRegistrationButton} className="sign-button" type="submit">
          Registration
        </Button>)}
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
          onClick={handleFacebookSignIn}
        >
          <FontAwesomeIcon icon={faFacebook} /> Continue With Facebook
        </Button>
      </Form>
    </div>
  );
};

export default Login;
