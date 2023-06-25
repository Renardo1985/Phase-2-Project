import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function GameItem({ name, genre, thumb, id }) { 

  return (

   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={thumb} />
   <Card.Body>
     <Card.Title>{name}</Card.Title>
     <Card.Text>Genre: {genre}</Card.Text>
     <Button variant="primary"> <Link to={`games/${id}`} className ="link">See more</Link></Button>    
   </Card.Body>
  </Card>

  );
}

export default GameItem;