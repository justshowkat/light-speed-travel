import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './FrontPageCard.css'

const FrontPageCard = (props) => {
  
  const {title, img, routePath} = props
  return (
    <Link to={routePath}>
      <Card style={{ width: "18rem" }} className='custom-card'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className='custom-card-title'>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default FrontPageCard;
