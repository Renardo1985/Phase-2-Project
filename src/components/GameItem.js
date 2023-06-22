import React from "react";
import { Link } from "react-router-dom";

function GameItem({ name, genre, thumb, id }) { 

  return (
    <div>
      <h2>{name}</h2>
      <h4>Genre: {genre}</h4>
      <img src = {thumb} alt = "logo"/><br></br>
      <Link to={`games/${id}`}>See more</Link>
    </div>
  );
}

export default GameItem;