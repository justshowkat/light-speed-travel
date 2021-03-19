import React from "react";
import { Card } from "react-bootstrap";

const FrontPageCard = (props) => {
  
  const {title, img} = props
  console.log(props)
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FrontPageCard;
