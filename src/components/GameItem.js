import React from "react";
import { Link } from "react-router-dom";

function GameItem({ name, genre, thumb, id }) { 

  return (
    <div className="card">
      <div>
      <img src = {thumb} alt = "logo"/>
      </div>
      <div>
      <h2>{name}</h2>
      <h4>Genre: {genre}</h4>      
      <Link to={`games/${id}`}>See more</Link>
      </div>
    </div>
  );
}

export default GameItem;