import React from "react";
import { Button, Form, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
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
              <Nav.Link><Link className='custom-nav-link' to="/">Blog</Link></Nav.Link>
              <Nav.Link><Link className='custom-nav-link' to="/">Contact</Link></Nav.Link>
            </Nav>
            <Link className='custom-nav-link' to="/login"><Button variant="outline-success">Login</Button></Link>
            
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
