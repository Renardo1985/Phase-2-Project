import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function GameItem({ name, genre, thumb, id, star }) {
  const [favorite, setFavorite] = useState(star);

  function isFavorite() {
    if (favorite === undefined) setFavorite(false);

    setFavorite(!favorite);
    fetch(`http://localhost:3001/games/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorite: !favorite }),
    });
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumb} />
      <p className="card-a" onClick={isFavorite}>
        {favorite ? "❤" : "🤍"}
      </p>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Genre: {genre}</Card.Text>
        <Button variant="primary">
          <Link to={`games/${id}`} className="link">
            See more
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default GameItem;
