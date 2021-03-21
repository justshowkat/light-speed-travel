import React, { useState } from "react";
import { Button, Card, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router";
import { bus, cars, bikes, trains} from "../FakeData/VehiclesData";
import "./Destination.css";
import GoogleMapComponent from "./GoogleMap/GoogleMap";
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
        <img src="./images/Map.png" alt="" srcset="" />
        <div id='map-box'>
          <GoogleMapComponent></GoogleMapComponent>
        </div>
      </div>
    </div>
  );
};

export default Destination;
<h1>this is destination page</h1>;
