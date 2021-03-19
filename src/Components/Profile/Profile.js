import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { userContext } from "../Context/Context";
import './Profile.css'

const Profile = () => {
  const [user] = useContext(userContext);
  return (
    <div className='user-profile-card'>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user.image} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
