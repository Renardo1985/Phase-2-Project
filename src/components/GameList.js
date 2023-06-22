import React, { useEffect, useState } from "react";
import GameItem from "./GameItem";

function GameList() {
    const [games, setGames] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3001/games")
            .then(r => r.json())
            .then(data => setGames(data))
    }, [])

    const gameItems = games.map((games) => (
    <GameItem
            key={games.id}
            id = {games.id}
            name={games.title}
            genre={games.genre}
            thumb={games.thumbnail}
            platform={games.platform}
        />
    ));
    
    return (
        <div id="games">
            <h2>GAMES</h2>
            <div>{gameItems}</div>
        </div>
    );
}

export default GameList;
