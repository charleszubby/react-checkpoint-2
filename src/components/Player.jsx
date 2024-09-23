import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card
      style={{
        width: "18rem",
        marginBottom: "4rem",
      }}
    >
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  imageUrl: "https://via.placeholder.com/150",
};

export default Player;
