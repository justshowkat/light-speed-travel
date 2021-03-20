import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="destination-page container">
      <div className="column1">
        <Form className='destination-form'>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Pick from</Form.Label>
            <Form.Control placeholder="ex: mirpur-1" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Drop zone</Form.Label>
            <Form.Control placeholder="ex: Banani" />
          </Form.Group>

          <Button className='destination-button' type="submit">
            Search
          </Button>
        </Form>
      </div>
      <div className="column2">
          <img src="./images/Map.png" alt="" srcset=""/>
      </div>
    </div>
  );
};

export default Destination;
<h1>this is destination page</h1>;
