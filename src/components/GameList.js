import React, { useEffect, useState } from "react";
import GameItem from "./GameItem";
import CategoryFilter from "./CategoryFilter";

function GameList() {
    const [games, setGames] = useState([]);
    const [selectedCat, setSelectedCat] = useState("All");
    
    useEffect(() => {
        fetch("http://localhost:3001/games")
            .then(r => r.json())
            .then(data => setGames(data))
    }, [])

    const cat = games.map((i) => (i.genre))
    const categories = ["All",...new Set(cat)]


    const gameDisplayed = games.filter((g) => {
        if (selectedCat === "All") return true;
        return selectedCat === g.genre;
    })

    const gameItems = gameDisplayed.map((games) => (
    <GameItem
            key={games.id}
            id = {games.id}
            name={games.title}
            genre={games.genre}
            thumb={games.thumbnail}
            platform={games.platform}
        />
    ));

    console.log(selectedCat)
    
    return (
        <div id="games-list">
            <h2>GAMES</h2>
            <CategoryFilter categories = {categories} selectedCat={selectedCat} setSelectedCat={setSelectedCat}/>
            <div>{gameItems}</div>
        </div>
    );
}

export default GameList;
