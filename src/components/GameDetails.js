import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function GameDetails() {
    const [game, setGame] = useState(null);
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:3001/games/${id}`)
            .then(r => r.json())
            .then(data => setGame(data))
    }, [id])
    
    if (!game) return <h2>Loading...</h2>
    

    
    return (
        <section>
                <div>
                    <h2>{game.title}</h2>
                    <h4>Genre: {game.genre}</h4>
                    <img src = {game.thumbnail} alt = "logo"/>
                    <p>{game.short_description}</p>
                    <p>Publisher: {game.publisher}</p>
                    <p>Developer: {game.developer}</p>
                    <p>Release Date: {game.release_date}</p>
                    <p>Platform: {game.platform}</p>
                 </div>
        </section>
    );
}

export default GameDetails;
