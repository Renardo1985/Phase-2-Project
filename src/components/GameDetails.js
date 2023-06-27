import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function GameDetails() {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  console.log(useParams())

  useEffect(() => {
    fetch(`http://localhost:3001/games/${id}`)
      .then((r) => r.json())
      .then((data) => setGame(data));
  }, [id]);

  if (!game) return <h2>Loading...</h2>;
  return (
    
    <Card className="card-details" style={{ width: "30rem" }}>
      <Card.Img variant="top" src={game.thumbnail} />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>{game.short_description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Genre: {game.genre}</ListGroup.Item>
        <ListGroup.Item>Publisher: {game.publisher}</ListGroup.Item>
        <ListGroup.Item>Developer: {game.developer}</ListGroup.Item>
        <ListGroup.Item>Release Date: {game.release_date}</ListGroup.Item>
        <ListGroup.Item>Platform: {game.platform}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={game.game_url} target="_blank" >Game Website</Card.Link>
      </Card.Body>
    </Card>
   
  );
}

export default GameDetails;
