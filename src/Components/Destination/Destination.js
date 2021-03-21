import React, { useState } from "react";
import { Button, Card, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import Iframe from "react-iframe";
import { useParams } from "react-router";
import { bus, cars, bikes, trains} from "../FakeData/VehiclesData";
import "./Destination.css";
import Vehicle from "./Vehicle/Vehicle";

const Destination = () => {
  let { ride } = useParams()
  const [location, setLocation] = useState({
    from: "",
    drop: "",
  });

  const handleSubmit = (e) => {
    const start = document.getElementById("from").value;
    const end = document.getElementById("drop").value;

    setLocation({
      from: start,
      drop: end,
    });
    e.preventDefault();
  };
  return (
    <div className="destination-page container">
      <div className="column1">
        <Form className="destination-form">
          <Form.Group>
            <Form.Label>Pick from</Form.Label>
            <Form.Control id="from" placeholder="ex: mirpur-1" required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Drop zone</Form.Label>
            <Form.Control id="drop" placeholder="ex: Banani" required />
          </Form.Group>

          <Button
            onClick={handleSubmit}
            className="destination-button"
            type="submit"
          >
            Search
          </Button>
        </Form>

        {location.from && location.drop ? (<Card className='custom-destination-card'>
          <Card.Body>
            <Card.Title> <strong>{location.from ? `Pick: ${location.from}` : 'Pick'}</strong> & <strong>{location.drop? `Drop: ${location.drop}` : 'Drop'}</strong> </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {ride === 'car' && cars.map(data => <ListGroupItem><Vehicle vehicleImage={data.vehicleImage} vehicleType={data.vehicleType} seats={data.seats} price={data.price} /> </ListGroupItem>)}
            {ride === 'bus' && bus.map(data => <ListGroupItem><Vehicle vehicleImage={data.vehicleImage} vehicleType={data.vehicleType} seats={data.seats} price={data.price} /> </ListGroupItem>)}
            {ride === 'bike' && bikes.map(data => <ListGroupItem><Vehicle vehicleImage={data.vehicleImage} vehicleType={data.vehicleType} seats={data.seats} price={data.price} /> </ListGroupItem>)}
            {ride === 'train' && trains.map(data => <ListGroupItem><Vehicle vehicleImage={data.vehicleImage} vehicleType={data.vehicleType} seats={data.seats} price={data.price} /> </ListGroupItem>)}
          </ListGroup>
        </Card>) : ''}
      </div>
      <div className="column2">
      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.27923991057244!3d23.780573258035957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616332672628!5m2!1sen!2sbd" className='custom-Map' allowfullscreen="" loading="lazy"></Iframe>
      </div>
    </div>
  );
};

export default Destination;
<h1>this is destination page</h1>;
