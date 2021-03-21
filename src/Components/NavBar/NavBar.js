import React, { useContext } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { userContext } from "../Context/Context";
import './NavBar.css'

const NavBar = () => {
  const [user, setUser] = useContext(userContext)
  // console.log(userInfo)
  const handleLogOut = () => {
    setUser({
      isSignedIn: false,
      name:'',
      email: '',
      password: '',
      confirmPassword: '',
      image: ''
    })
    window.location.reload(true);
  }
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand><Link className='custom-nav-link' to="/">Light Speed Travel</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <Nav>
              
              <Nav.Link><Link className='custom-nav-link' to="/">Home</Link></Nav.Link>
              <Nav.Link><Link className='custom-nav-link' to="/destination">Destination</Link></Nav.Link>
              <Nav.Link><Link className='custom-nav-link' to="/privacy-policy">privacy-policy</Link></Nav.Link>
              {
              user.name ? (<Nav.Link><Link className='custom-nav-link' to="/profile"> <img className="avatar" src={user.image} alt="avatar" srcset=""/> {user.name}</Link></Nav.Link>) : (<Nav.Link><Link className='custom-nav-link' to="/profile"> {user.email}</Link></Nav.Link>)
            }
            </Nav>
            {
              user.name || user.email ? (<Link onClick={handleLogOut} className='custom-nav-link'><Button variant="outline-success">Log Out</Button></Link>) : (<Link className='custom-nav-link' to="/login"><Button variant="outline-success">Login</Button></Link>)
            }
            
            
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
