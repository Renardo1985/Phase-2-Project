import React, { useEffect, useState } from "react";
import GameItem from "./GameItem";
import CategoryFilter from "./CategoryFilter";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";



function GameList() {
    const [games, setGames] = useState([]);
    const [selectedCat, setSelectedCat] = useState("All");
    const [search , setSearch] = useState("") ;
    
    
    useEffect(() => {        
        fetch("http://localhost:3001/games")
            .then(r => r.json())
            .then(data => setGames(data))
            .catch(e => alert(e.message +" data please start json server"))
    }, [])

    const cat = games.map((i) => (i.genre))
    const categories = ["All",...new Set(cat)]
    let gameDisplayed = [];
    if (useHistory().location.pathname === '/games/favorites'){
        gameDisplayed = games.filter((g) => {return (g.favorite === true)}).filter((g) => {if (selectedCat === "All") {return true} else {return selectedCat === g.genre}}).filter(i => i.title.toLowerCase().includes(search.toLowerCase()))

    }
    else{
    gameDisplayed = games.filter((g) => {if (selectedCat === "All") {return true} else {return selectedCat === g.genre}}).filter(i => i.title.toLowerCase().includes(search.toLowerCase()))
    }
    

    const gameItems = gameDisplayed.map((games) => (
    <GameItem
            key={games.id}
            id = {games.id}
            star = {games.favorite}
            name={games.title}
            genre={games.genre}
            thumb={games.thumbnail}
            platform={games.platform}
        />
    ));

    return (
        <div id="games-list">
            <h2>GAMES</h2>   
            <div>  
            <CategoryFilter categories = {categories} selectedCat={selectedCat} setSelectedCat={setSelectedCat} search={search} setSearch={setSearch}/>
            <Link to={`/new`}>Add New Game</Link>
            </div>
            <div className="card-container">
                {gameItems}
            </div>
        </div>
    );
}

export default GameList;
