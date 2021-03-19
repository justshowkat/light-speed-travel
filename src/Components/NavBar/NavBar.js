import React from "react";
import { Button, Form, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#home">LightSpeed Travel Agency</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Destination</Nav.Link>
              <Nav.Link href="#home">Blog</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
